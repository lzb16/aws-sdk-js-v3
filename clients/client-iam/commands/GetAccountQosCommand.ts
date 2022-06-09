import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetAccountQosRequest, GetAccountQosResponse } from "../models/models_0";
import {
  deserializeAws_queryGetAccountQosCommand,
  serializeAws_queryGetAccountQosCommand,
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

export type GetAccountQosCommandInput = GetAccountQosRequest;
export type GetAccountQosCommandOutput = GetAccountQosResponse & __MetadataBearer;

/**
 * <p>Changes the password of the IAM account who is calling this operation. The AWS account
 *          root user password is not affected by this operation.</p>
 *          <p>To change the password for a different user, see <a>UpdateLoginProfile</a>.
 *          For more information about modifying passwords, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html">Managing Passwords</a> in the
 *             <i>IAM User Guide</i>.</p>
 */
export class GetAccountQosCommand extends $Command<
  GetAccountQosCommandInput,
  GetAccountQosCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetAccountQosCommandInput) {
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
  ): Handler<GetAccountQosCommandInput, GetAccountQosCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "GetAccountQosCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAccountQosRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetAccountQosResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetAccountQosCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetAccountQosCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAccountQosCommandOutput> {
    return deserializeAws_queryGetAccountQosCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
