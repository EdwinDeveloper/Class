using System;
using Microsoft.IdentityModel.Tokens;

namespace Api.Controllers
{
    public class JWTService
    {
        public string secretKey { get; set; }

        public JWTService(string jwtsecretkey)
        {
            secretKey = jwtsecretkey;
        }

        public bool IsTokenValid(string token)
        {
            if (string.IsNullOrEmpty(token)) {

                throw new ArgumentException("Given token is null or empty");
                TokenValidationParameters tokenValidationParameters = GetTokenValidationParameters();

            }
        }

    }
}
