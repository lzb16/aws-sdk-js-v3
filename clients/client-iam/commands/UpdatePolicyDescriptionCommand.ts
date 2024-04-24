import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UpdatePolicyDescriptionRequest } from "../models/models_1";
import {
  deserializeAws_queryUpdatePolicyDescriptionCommand,
  serializeAws_queryUpdatePolicyDescriptionCommand,
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

export type UpdatePolicyDescriptionCommandInput = UpdatePolicyDescriptionRequest;
export type UpdatePolicyDescriptionCommandOutput = __MetadataBearer;

/**
 * <p>UpdatePolicyDescription.</p>
 */
export class UpdatePolicyDescriptionCommand extends $Command<
  UpdatePolicyDescriptionCommandInput,
  UpdatePolicyDescriptionCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdatePolicyDescriptionCommandInput) {
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
  ): Handler<UpdatePolicyDescriptionCommandInput, UpdatePolicyDescriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "UpdatePolicyDescriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdatePolicyDescriptionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdatePolicyDescriptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryUpdatePolicyDescriptionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdatePolicyDescriptionCommandOutput> {
    return deserializeAws_queryUpdatePolicyDescriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
