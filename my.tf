// Terraform Azure App Plan
// For an Azure App Plan called mon2-appl-plan
// An App Service called mon2-app-service
// 

// Create an Azure resource group
resource "azurerm_resource_group" "example" {
  name     = "example-resources"
  location = "West Europe"
}

// Azure App Service Plan
resource "azurerm_app_service_plan" "example" {
  name                = "mon2-appl-plan"
  location            = azurerm_resource_group.example.location
  resource_group_name = azurerm_resource_group.example.name
  sku {
    tier = "Standard"
    size = "S1"
  }
}

// Azure App Service
resource "azurerm_app_service" "example" {
  name                = "mon2-app-service"
  location            = azurerm_resource_group.example.location
  resource_group_name = azurerm_resource_group.example.name
  app_service_plan_id = azurerm_app_service_plan.example.id

  site_config {
    dotnet_framework_version = "v4.0"
    scm_type                 = "LocalGit"
  }
}

// Output the url of the Azure App Service
output "url" {
  value = azurerm_app_service.example.default_site_hostname
}

// Terraform Azure App Plan
// For an Azure App Plan called mon2-appl-plan
// An App Service called mon2-app-service
// 

// Create an Azure resource group
resource "azurerm_resource_group" "example" {
  name     = "example-resources"
  location = "West Europe"
}

// Azure App Service Plan
resource "azurerm_app_service_plan" "example" {
  name                = "mon2-appl-plan"
  location            = azurerm_resource_group.example.location
  resource_group_name = azurerm_resource_group.example.name
  sku {
    tier = "Standard"
    size = "S1"
  }
}

// Azure App Service
resource "azurerm_app_service" "example" {
  name                = "mon2-app-service"
  location            = azurerm_resource_group.example.location
  resource_group_name = azurerm_resource_group.example.name
  app_service_plan_id = azurerm_app_service_plan.example.id

  site_config {
    dotnet_framework_version = "v4.0"
    scm_type                 = "LocalGit"
  }
}

// Output the url of the Azure App Service
output "url" {
  value = azurerm_app_service.example.default_site_hostname
}

// Terraform Azure App Plan
// For an Azure App Plan called mon2-appl-plan
// An App Service called mon2-app-service
// 

// Create an Azure resource group
resource "az 



