using Newmark.PropertyManagement.Api;
using Newmark.PropertyManagement.Application;
using Newmark.PropertyManagement.Services;
using Newmark.PropertyManagement.Services.Implementations;
using Serilog;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddAutoMapper(typeof(MappingProfile));

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        builder => builder
            .AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader());
});

// Add services to the container.
builder.Services.AddScoped<IPropertyService, PropertyService>();
builder.Services.AddScoped<IPropertyBlobRepository, PropertyBlobRepository>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Host.UseSerilog((hostingContext, loggerConfiguration) =>
                loggerConfiguration.ReadFrom.Configuration(hostingContext.Configuration));

var configurationBuilder = new ConfigurationBuilder().SetBasePath(builder.Environment.ContentRootPath)
                                                                 .AddJsonFile("appsettings.json", false, true)
                                                                 .AddJsonFile($"appsettings.{builder.Environment.EnvironmentName}.json", true, true);

var configurationRoot = configurationBuilder.Build();

//var keyVaultUri = builder.Configuration["AzureKeyVault:VaultUri"];
//if (!string.IsNullOrEmpty(keyVaultUri))
//{
//    builder.Configuration.AddAzureKeyVault(new Uri(keyVaultUri), new Azure.Identity.DefaultAzureCredential());
//}

// ✅ Register Services
builder.Services.AddSingleton<AzureKeyVaultService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowAll");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
