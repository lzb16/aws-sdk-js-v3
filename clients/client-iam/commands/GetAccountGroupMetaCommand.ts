import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetAccountGroupMetaRequest, GetAccountGroupMetaResponse } from "../models/models_0";
import {
  deserializeAws_queryGetAccountGroupMetaCommand,
  serializeAws_queryGetAccountGroupMetaCommand,
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

export type GetAccountGroupMetaCommandInput = GetAccountGroupMetaRequest;
export type GetAccountGroupMetaCommandOutput = GetAccountGroupMetaResponse & __MetadataBearer;

/**
 * <p>Retrieves information about all IAM account group.</p>
 */
export class GetAccountGroupMetaCommand extends $Command<
  GetAccountGroupMetaCommandInput,
  GetAccountGroupMetaCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetAccountGroupMetaCommandInput) {
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
  ): Handler<GetAccountGroupMetaCommandInput, GetAccountGroupMetaCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "GetAccountGroupMetaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetAccountGroupMetaRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetAccountGroupMetaResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetAccountGroupMetaCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetAccountGroupMetaCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetAccountGroupMetaCommandOutput> {
    return deserializeAws_queryGetAccountGroupMetaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
