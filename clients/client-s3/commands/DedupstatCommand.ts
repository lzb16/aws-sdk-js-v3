import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { DedupstatOutput, DedupstatRequest } from "../models/models_0";
import { deserializeAws_restXmlDedupstatCommand, serializeAws_restXmlDedupstatCommand } from "../protocols/Aws_restXml";
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

export type DedupstatCommandInput = DedupstatRequest;
export type DedupstatCommandOutput = DedupstatOutput & __MetadataBearer;

/**
 * <p>查询系统重删数据或存储池重删数据</p>
 */
export class DedupstatCommand extends $Command<DedupstatCommandInput, DedupstatCommandOutput, S3ClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DedupstatCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: S3ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DedupstatCommandInput, DedupstatCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "DedupstatCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DedupstatRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DedupstatOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DedupstatCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlDedupstatCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DedupstatCommandOutput> {
    return deserializeAws_restXmlDedupstatCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
