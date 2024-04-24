import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { LoginConsoleRequest, LoginConsoleResponse } from "../models/models_1";
import { deserializeAws_queryLoginConsoleCommand, serializeAws_queryLoginConsoleCommand } from "../protocols/Aws_query";
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

export type LoginConsoleCommandInput = LoginConsoleRequest;
export type LoginConsoleCommandOutput = LoginConsoleResponse & __MetadataBearer;

/**
 * <p>Login</p>
 */
export class LoginConsoleCommand extends $Command<
  LoginConsoleCommandInput,
  LoginConsoleCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: LoginConsoleCommandInput) {
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
  ): Handler<LoginConsoleCommandInput, LoginConsoleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "LoginConsoleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: LoginConsoleRequest.filterSensitiveLog,
      outputFilterSensitiveLog: LoginConsoleResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: LoginConsoleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryLoginConsoleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<LoginConsoleCommandOutput> {
    return deserializeAws_queryLoginConsoleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
