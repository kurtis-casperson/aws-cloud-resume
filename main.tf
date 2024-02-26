terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.37.0"
    }
  }
}

# Configure the AWS Provider
provider "aws" {
  region = "us-west-1"
  access_key = "AKIA2WQQHJLI2ZPBNI5R"
  secret_key = "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"
}

resource "aws_s3_bucket" "cloud_resume" {
  bucket = "kurtis-cloud-resume.com"
}

######error that i am not able to figure out on import
# resource "aws_route53_zone" "zone" {
#   name = "kurtis-cloud-resume.com"
#   comment = "Managed by Terraform"
# }

resource "aws_dynamodb_table" "counter" {
  name           = "cloud-resume-counter"  
  billing_mode   = "PROVISIONED"         
  read_capacity  = 1                     
  write_capacity = 1                      

  attribute {
    name = "id"
    type = "N"  # String type for the primary key
  }

  hash_key = "id"   # Specify the primary key
 
}

#terraform apply error - imported fine
resource "aws_lambda_function" "counter_function" {
  function_name    = "myLambdaSample" 
  handler          = "lambda_function.py"                
  runtime          = "python 3.11"                   
  role             = "arn:aws:lambda:us-west-1:735547181777:function:myLambdaSample" 
  filename         = "myLambdaSample-40bec328-1d77-4bb2-b7e6-8a15630a60c9.zip"
  
  ephemeral_storage {
    size = 512 
  }   
}


