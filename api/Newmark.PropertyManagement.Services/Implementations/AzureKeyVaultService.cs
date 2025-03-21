using Azure.Security.KeyVault.Secrets;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace Newmark.PropertyManagement.Services.Implementations
{
    public class AzureKeyVaultService
    {
        private readonly SecretClient _secretClient;
        private readonly ILogger<AzureKeyVaultService> _logger;
        public AzureKeyVaultService(IConfiguration configuration, ILogger<AzureKeyVaultService> logger)
        {
            var vaultUri = new Uri(configuration["AzureKeyVault:VaultUri"]);
            _secretClient = new SecretClient(vaultUri, new Azure.Identity.DefaultAzureCredential());
            _logger = logger;
        }

        public async Task<string> GetSecretAsync(string secretName)
        {
            try
            {
                KeyVaultSecret secret = await _secretClient.GetSecretAsync(secretName);
                return secret.Value;
            }
            catch (Exception ex)
            {
                _logger.LogError($"Error retrieving secret {secretName}: {ex.Message}");
                return null;
            }
        }
    }
}
