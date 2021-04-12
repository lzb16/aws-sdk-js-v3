import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { CheckServicePermissionRequest, CheckServicePermissionResponse } from "../models/models_0";
import {
  deserializeAws_queryCheckServicePermissionCommand,
  serializeAws_queryCheckServicePermissionCommand,
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

export type CheckServicePermissionCommandInput = CheckServicePermissionRequest;
export type CheckServicePermissionCommandOutput = CheckServicePermissionResponse & __MetadataBearer;

/**
 * <p>CheckServicePermission</p>
 */
export class CheckServicePermissionCommand extends $Command<
  CheckServicePermissionCommandInput,
  CheckServicePermissionCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CheckServicePermissionCommandInput) {
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
  ): Handler<CheckServicePermissionCommandInput, CheckServicePermissionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "CheckServicePermissionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CheckServicePermissionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CheckServicePermissionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CheckServicePermissionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCheckServicePermissionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CheckServicePermissionCommandOutput> {
    return deserializeAws_queryCheckServicePermissionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
