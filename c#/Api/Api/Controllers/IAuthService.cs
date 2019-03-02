using System;
namespace Api.Controllers
{
    public interface IAuthService
    {
        string GetSymmetricSecurityKey();
        string GetTokenValidationParameters();
    }
}
