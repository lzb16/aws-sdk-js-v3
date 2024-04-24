import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { CreateUserAccessKeyRequest, CreateUserAccessKeyResponse } from "../models/models_0";
import {
  deserializeAws_queryCreateUserAccessKeyCommand,
  serializeAws_queryCreateUserAccessKeyCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type CreateUserAccessKeyCommandInput = CreateUserAccessKeyRequest;
export type CreateUserAccessKeyCommandOutput = CreateUserAccessKeyResponse & __MetadataBearer;

/**
 * <p> Creates a new AWS secret access key and corresponding AWS access key ID for the
 *          specified user. The default status for new keys is <code>Active</code>.</p>
 *          <p>If you do not specify a user name, IAM determines the user name implicitly based on
 *          the AWS access key ID signing the request. This operation works for access keys under the
 *          AWS account. Consequently, you can use this operation to manage AWS account root user
 *          credentials. This is true even if the AWS account has no associated users.</p>
 *          <p>The number and size of IAM resources in an AWS account are limited. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM and STS Quotas</a> in the <i>IAM User Guide</i>.</p>
 *          <important>
 *             <p>To ensure the security of your AWS account, the secret access key is accessible
 *             only during key and user creation. You must save the key (for example, in a text file)
 *             if you want to be able to access it again. If a secret key is lost, you can delete the
 *             access keys for the associated user and then create new keys.</p>
 *          </important>
 */
export class CreateUserAccessKeyCommand extends $Command<
  CreateUserAccessKeyCommandInput,
  CreateUserAccessKeyCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateUserAccessKeyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateUserAccessKeyCommandInput, CreateUserAccessKeyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "CreateUserAccessKeyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateUserAccessKeyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateUserAccessKeyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateUserAccessKeyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateUserAccessKeyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateUserAccessKeyCommandOutput> {
    return deserializeAws_queryCreateUserAccessKeyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
