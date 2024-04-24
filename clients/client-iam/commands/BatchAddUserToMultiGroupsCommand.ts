import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { BatchAddUserToMultiGroupsRequest, BatchAddUserToMultiGroupsResponse } from "../models/models_0";
import {
  deserializeAws_queryBatchAddUserToMultiGroupsCommand,
  serializeAws_queryBatchAddUserToMultiGroupsCommand,
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

export type BatchAddUserToMultiGroupsCommandInput = BatchAddUserToMultiGroupsRequest;
export type BatchAddUserToMultiGroupsCommandOutput = BatchAddUserToMultiGroupsResponse & __MetadataBearer;

/**
 * <p>Add the specified group to the specified user.</p>
 */
export class BatchAddUserToMultiGroupsCommand extends $Command<
  BatchAddUserToMultiGroupsCommandInput,
  BatchAddUserToMultiGroupsCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchAddUserToMultiGroupsCommandInput) {
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
  ): Handler<BatchAddUserToMultiGroupsCommandInput, BatchAddUserToMultiGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "BatchAddUserToMultiGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchAddUserToMultiGroupsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchAddUserToMultiGroupsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchAddUserToMultiGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryBatchAddUserToMultiGroupsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchAddUserToMultiGroupsCommandOutput> {
    return deserializeAws_queryBatchAddUserToMultiGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
