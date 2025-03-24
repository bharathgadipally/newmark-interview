using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Newmark.PropertyManagement.Domain;
using Newmark.PropertyManagement.Services.Implementations;
using Newtonsoft.Json;

namespace Newmark.PropertyManagement.Services
{
    public class PropertyBlobRepository : IPropertyBlobRepository
    {
        private readonly string _blobUrl;
        private readonly AzureKeyVaultService _keyVaultService;
        private readonly string _sasToken;
        private readonly ILogger<PropertyBlobRepository> _logger;

        public PropertyBlobRepository(IConfiguration configuration, AzureKeyVaultService keyVaultService, ILogger<PropertyBlobRepository> logger)
        {
            _blobUrl = configuration["AzureBlob:Url"];
            _sasToken = configuration["AzureBlob:SASToken"];
            _keyVaultService = keyVaultService;
            _logger = logger;
        }

        public async Task<List<Property>> GetPropertiesAsync()
        {
            try
            {
                //TODO: enable after the Blob storage works

                //string sasToken = await _keyVaultService.GetSecretAsync("AzureStorageSasToken");
                var blobUri = $"{_blobUrl}{_sasToken}";
                var blobClient = new BlobClient(new Uri(blobUri));
                BlobDownloadInfo download = await blobClient.DownloadAsync();

                using (StreamReader reader = new StreamReader(download.Content))
                {
                    string jsonData = await reader.ReadToEndAsync();
                    return JsonConvert.DeserializeObject<List<Property>>(jsonData);
                }

                //using StreamReader reader = new StreamReader("testdata.json");
                //string jsonData = await reader.ReadToEndAsync();
                //var propertyDtoList = JsonConvert.DeserializeObject<PropertyDtoWrapper>(jsonData);

                //var properties = propertyDtoList.Properties;

                //return properties;

            }
            catch (Exception ex)
            {
                _logger.LogError(ex, $"Error fetching blob: {ex.Message}");
                return new List<Property>(); // Return empty list on failure
            }
        }
    }
}
