import {
  AppConfigClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../AppConfigClient";
import { DeleteConfigurationProfileRequest } from "../models/index";
import {
  deserializeAws_restJson1_1DeleteConfigurationProfileCommand,
  serializeAws_restJson1_1DeleteConfigurationProfileCommand
} from "../protocols/Aws_restJson1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer
} from "@aws-sdk/types";

export type DeleteConfigurationProfileCommandInput = DeleteConfigurationProfileRequest;
export type DeleteConfigurationProfileCommandOutput = __MetadataBearer;

export class DeleteConfigurationProfileCommand extends $Command<
  DeleteConfigurationProfileCommandInput,
  DeleteConfigurationProfileCommandOutput,
  AppConfigClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteConfigurationProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppConfigClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteConfigurationProfileCommandInput,
    DeleteConfigurationProfileCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteConfigurationProfileCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1DeleteConfigurationProfileCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<DeleteConfigurationProfileCommandOutput> {
    return deserializeAws_restJson1_1DeleteConfigurationProfileCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
