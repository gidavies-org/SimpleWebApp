// Define the provider
provider "azurerm" {
  features {}
}

// Create an Azure resource group
resource "azurerm_resource_group" "example" {
  name     = "example-resources"
  location = "West Europe"
  
}


// Create an Azure Kubernetes Service
resource "azurerm_kubernetes_cluster" "example" {
  name                = "example-aks"
  location            = azurerm_resource_group.example.location
  resource_group_name = azurerm_resource_group.example.name
  dns_prefix          = "example-aks"

  agent_pool_profile {
    name            = "agentpool"
    count           = 3
    vm_size         = "Standard_DS2_v2"
    os_type         = "Linux"
    os_disk_size_gb = 30
  }

  service_principal {
    client_id     = "YOUR_CLIENT_ID"
    client_secret = "YOUR_CLIENT_SECRET"
  }

  tags = {
    Environment = "dev"
  }
}