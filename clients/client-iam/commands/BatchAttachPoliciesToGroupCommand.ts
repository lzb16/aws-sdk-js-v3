import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { BatchAttachPoliciesToGroupRequest, BatchAttachPoliciesToGroupResponse } from "../models/models_0";
import {
  deserializeAws_queryBatchAttachPoliciesToGroupCommand,
  serializeAws_queryBatchAttachPoliciesToGroupCommand,
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

export type BatchAttachPoliciesToGroupCommandInput = BatchAttachPoliciesToGroupRequest;
export type BatchAttachPoliciesToGroupCommandOutput = BatchAttachPoliciesToGroupResponse & __MetadataBearer;

/**
 * <p>BatchAttachPoliciesToGroup.</p>
 */
export class BatchAttachPoliciesToGroupCommand extends $Command<
  BatchAttachPoliciesToGroupCommandInput,
  BatchAttachPoliciesToGroupCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchAttachPoliciesToGroupCommandInput) {
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
  ): Handler<BatchAttachPoliciesToGroupCommandInput, BatchAttachPoliciesToGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "BatchAttachPoliciesToGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchAttachPoliciesToGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchAttachPoliciesToGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchAttachPoliciesToGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryBatchAttachPoliciesToGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchAttachPoliciesToGroupCommandOutput> {
    return deserializeAws_queryBatchAttachPoliciesToGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
