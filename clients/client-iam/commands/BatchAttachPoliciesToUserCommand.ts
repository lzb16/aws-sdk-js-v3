import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { BatchAttachPoliciesToUserRequest, BatchAttachPoliciesToUserResponse } from "../models/models_0";
import {
  deserializeAws_queryBatchAttachPoliciesToUserCommand,
  serializeAws_queryBatchAttachPoliciesToUserCommand,
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

export type BatchAttachPoliciesToUserCommandInput = BatchAttachPoliciesToUserRequest;
export type BatchAttachPoliciesToUserCommandOutput = BatchAttachPoliciesToUserResponse & __MetadataBearer;

/**
 * <p>BatchAttachPoliciesToUser.</p>
 */
export class BatchAttachPoliciesToUserCommand extends $Command<
  BatchAttachPoliciesToUserCommandInput,
  BatchAttachPoliciesToUserCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchAttachPoliciesToUserCommandInput) {
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
  ): Handler<BatchAttachPoliciesToUserCommandInput, BatchAttachPoliciesToUserCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "BatchAttachPoliciesToUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchAttachPoliciesToUserRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchAttachPoliciesToUserResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchAttachPoliciesToUserCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryBatchAttachPoliciesToUserCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchAttachPoliciesToUserCommandOutput> {
    return deserializeAws_queryBatchAttachPoliciesToUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
