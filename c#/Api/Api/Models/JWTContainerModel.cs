using System;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;

namespace Api.Models
{
    public class JWTContainerModel
    {
        public int spireInMinutes { get; set; } = 1080;
        public string secretKey { get; set; } = "hola";
        public string securityAlgoritm { get; set; } = SecurityAlgorithms.HmacSha256Signature;

        public Claim[] Claims { get; set; }


    }
}
