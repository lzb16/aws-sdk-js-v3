import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { BatchDetachPolicyFromMultiUsersRequest } from "../models/models_0";
import {
  deserializeAws_queryBatchDetachPolicyFromMultiUsersCommand,
  serializeAws_queryBatchDetachPolicyFromMultiUsersCommand,
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

export type BatchDetachPolicyFromMultiUsersCommandInput = BatchDetachPolicyFromMultiUsersRequest;
export type BatchDetachPolicyFromMultiUsersCommandOutput = __MetadataBearer;

/**
 * <p>BatchDetachPolicyFromMultiUsers.</p>
 */
export class BatchDetachPolicyFromMultiUsersCommand extends $Command<
  BatchDetachPolicyFromMultiUsersCommandInput,
  BatchDetachPolicyFromMultiUsersCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchDetachPolicyFromMultiUsersCommandInput) {
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
  ): Handler<BatchDetachPolicyFromMultiUsersCommandInput, BatchDetachPolicyFromMultiUsersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "BatchDetachPolicyFromMultiUsersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDetachPolicyFromMultiUsersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: BatchDetachPolicyFromMultiUsersCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryBatchDetachPolicyFromMultiUsersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchDetachPolicyFromMultiUsersCommandOutput> {
    return deserializeAws_queryBatchDetachPolicyFromMultiUsersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
