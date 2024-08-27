import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { BatchDetachPolicyFromMultiGroupsRequest, BatchDetachPolicyFromMultiGroupsResponse } from "../models/models_0";
import {
  deserializeAws_queryBatchDetachPolicyFromMultiGroupsCommand,
  serializeAws_queryBatchDetachPolicyFromMultiGroupsCommand,
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

export type BatchDetachPolicyFromMultiGroupsCommandInput = BatchDetachPolicyFromMultiGroupsRequest;
export type BatchDetachPolicyFromMultiGroupsCommandOutput = BatchDetachPolicyFromMultiGroupsResponse & __MetadataBearer;

/**
 * <p>BatchDetachPolicyFromMultiGroups.</p>
 */
export class BatchDetachPolicyFromMultiGroupsCommand extends $Command<
  BatchDetachPolicyFromMultiGroupsCommandInput,
  BatchDetachPolicyFromMultiGroupsCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchDetachPolicyFromMultiGroupsCommandInput) {
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
  ): Handler<BatchDetachPolicyFromMultiGroupsCommandInput, BatchDetachPolicyFromMultiGroupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "BatchDetachPolicyFromMultiGroupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDetachPolicyFromMultiGroupsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchDetachPolicyFromMultiGroupsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: BatchDetachPolicyFromMultiGroupsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryBatchDetachPolicyFromMultiGroupsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchDetachPolicyFromMultiGroupsCommandOutput> {
    return deserializeAws_queryBatchDetachPolicyFromMultiGroupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
