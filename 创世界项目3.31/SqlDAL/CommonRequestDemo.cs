using System;
using System.Collections.Generic;
using Aliyun.Acs.Core;
using Aliyun.Acs.Core.Profile;
using Aliyun.Acs.Core.Exceptions;
using Aliyun.Acs.Core.Http;

namespace CommonRequestDemo
{
    class Program
    {
        static void Main(string[] args)
        {
            IClientProfile profile = DefaultProfile.GetProfile("cn-qingdao", "<accessKeyId>", "<accessSecret>");
            DefaultAcsClient client = new DefaultAcsClient(profile);
            CommonRequest request = new CommonRequest();
            request.Method = MethodType.POST;
            request.Domain = "dysmsapi.aliyuncs.com";
            request.Version = "2017-05-25";
            request.Action = "SendSms";
            // request.Protocol = ProtocolType.HTTP;

            try
            {
                CommonResponse response = client.GetCommonResponse(request);
                Console.WriteLine(System.Text.Encoding.Default.GetString(response.HttpResponse.Content));
            }
            catch (ServerException e)
            {
                Console.WriteLine(e);
            }
            catch (ClientException e)
            {
                Console.WriteLine(e);
            }
        }
    }
}
