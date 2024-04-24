import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UserLoginRequest, UserLoginResponse } from "../models/models_1";
import { deserializeAws_queryUserLoginCommand, serializeAws_queryUserLoginCommand } from "../protocols/Aws_query";
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

export type UserLoginCommandInput = UserLoginRequest;
export type UserLoginCommandOutput = UserLoginResponse & __MetadataBearer;

/**
 * <p>Login</p>
 */
export class UserLoginCommand extends $Command<UserLoginCommandInput, UserLoginCommandOutput, IAMClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UserLoginCommandInput) {
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
  ): Handler<UserLoginCommandInput, UserLoginCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "UserLoginCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UserLoginRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UserLoginResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UserLoginCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryUserLoginCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UserLoginCommandOutput> {
    return deserializeAws_queryUserLoginCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
