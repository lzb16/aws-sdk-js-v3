import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetArchiveStorageRequest, GetArchiveStorageResponse } from "../models/models_0";
import {
  deserializeAws_queryGetArchiveStorageCommand,
  serializeAws_queryGetArchiveStorageCommand,
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

export type GetArchiveStorageCommandInput = GetArchiveStorageRequest;
export type GetArchiveStorageCommandOutput = GetArchiveStorageResponse & __MetadataBearer;

/**
 * 获取归档配置统计信息
 */
export class GetArchiveStorageCommand extends $Command<
  GetArchiveStorageCommandInput,
  GetArchiveStorageCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetArchiveStorageCommandInput) {
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
  ): Handler<GetArchiveStorageCommandInput, GetArchiveStorageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "GetArchiveStorageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetArchiveStorageRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetArchiveStorageResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetArchiveStorageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetArchiveStorageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetArchiveStorageCommandOutput> {
    return deserializeAws_queryGetArchiveStorageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
