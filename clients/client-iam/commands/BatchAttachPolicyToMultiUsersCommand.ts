import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { BatchAttachPolicyToMultiUsersRequest, BatchAttachPolicyToMultiUsersResponse } from "../models/models_0";
import {
  deserializeAws_queryBatchAttachPolicyToMultiUsersCommand,
  serializeAws_queryBatchAttachPolicyToMultiUsersCommand,
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

export type BatchAttachPolicyToMultiUsersCommandInput = BatchAttachPolicyToMultiUsersRequest;
export type BatchAttachPolicyToMultiUsersCommandOutput = BatchAttachPolicyToMultiUsersResponse & __MetadataBearer;

/**
 * <p>BatchAttachPolicyToMultiUsers.</p>
 */
export class BatchAttachPolicyToMultiUsersCommand extends $Command<
  BatchAttachPolicyToMultiUsersCommandInput,
  BatchAttachPolicyToMultiUsersCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchAttachPolicyToMultiUsersCommandInput) {
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
  ): Handler<BatchAttachPolicyToMultiUsersCommandInput, BatchAttachPolicyToMultiUsersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "BatchAttachPolicyToMultiUsersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchAttachPolicyToMultiUsersRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchAttachPolicyToMultiUsersResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchAttachPolicyToMultiUsersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryBatchAttachPolicyToMultiUsersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchAttachPolicyToMultiUsersCommandOutput> {
    return deserializeAws_queryBatchAttachPolicyToMultiUsersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
