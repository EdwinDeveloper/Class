using System;
using Api.Models;
using System.Collections.Generic;

namespace Api.Controllers
{
    public class CustomersController
    {
        public CustomersController(){}

        LoginRequest[] datos = new LoginRequest[]
        {
            new LoginRequest {email = "edwinDeveloper@outlook.com", password = "1223", nombre = "Edwin" },
            new LoginRequest {email = "edwin_020193_16@hotmail.com", password = "hahah", nombre = "Giovanni" },
            new LoginRequest {email = "edwin.perez@gonet.us", password = "Hardware", nombre = "Perez"}
        };

        public IEnumerable<LoginRequest> GetAllUsers()
        {
            return datos;
        }
    }
}
