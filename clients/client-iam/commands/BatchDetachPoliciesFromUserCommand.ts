import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { BatchDetachPoliciesFromUserRequest } from "../models/models_0";
import {
  deserializeAws_queryBatchDetachPoliciesFromUserCommand,
  serializeAws_queryBatchDetachPoliciesFromUserCommand,
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

export type BatchDetachPoliciesFromUserCommandInput = BatchDetachPoliciesFromUserRequest;
export type BatchDetachPoliciesFromUserCommandOutput = __MetadataBearer;

/**
 * <p>BatchDetachPoliciesFromUser.</p>
 */
export class BatchDetachPoliciesFromUserCommand extends $Command<
  BatchDetachPoliciesFromUserCommandInput,
  BatchDetachPoliciesFromUserCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchDetachPoliciesFromUserCommandInput) {
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
  ): Handler<BatchDetachPoliciesFromUserCommandInput, BatchDetachPoliciesFromUserCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "BatchDetachPoliciesFromUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDetachPoliciesFromUserRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchDetachPoliciesFromUserCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryBatchDetachPoliciesFromUserCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchDetachPoliciesFromUserCommandOutput> {
    return deserializeAws_queryBatchDetachPoliciesFromUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
