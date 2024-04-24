import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { BatchRemoveUserFromGroupsRequest, BatchRemoveUserFromGroupsResponse } from "../models/models_0";
import {
  deserializeAws_queryBatchRemoveUserFromGroupsCommand,
  serializeAws_queryBatchRemoveUserFromGroupsCommand,
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

export type BatchRemoveUserFromGroupsCommandInput = BatchRemoveUserFromGroupsRequest;
export type BatchRemoveUserFromGroupsCommandOutput = BatchRemoveUserFromGroupsResponse & __MetadataBearer;

/**
 * <p>Removes the specified user from the specified group.</p>
 */
export class BatchRemoveUserFromGroupsCommand extends $Command<
  BatchRemoveUserFromGroupsCommandInput,
  BatchRemoveUserFromGroupsCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchRemoveUserFromGroupsCommandInput) {
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
  ): Handler<BatchRemoveUserFromGroupsCommandInput, BatchRemoveUserFromGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "BatchRemoveUserFromGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchRemoveUserFromGroupsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchRemoveUserFromGroupsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchRemoveUserFromGroupsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryBatchRemoveUserFromGroupsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchRemoveUserFromGroupsCommandOutput> {
    return deserializeAws_queryBatchRemoveUserFromGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
