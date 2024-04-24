import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { ListMetaSearchBucketsOutput, ListMetaSearchBucketsRequest } from "../models/models_1";
import {
  deserializeAws_restXmlListMetaSearchBucketsCommand,
  serializeAws_restXmlListMetaSearchBucketsCommand,
} from "../protocols/Aws_restXml";
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

export type ListMetaSearchBucketsCommandInput = ListMetaSearchBucketsRequest;
export type ListMetaSearchBucketsCommandOutput = ListMetaSearchBucketsOutput & __MetadataBearer;

/**
 * <p>列举当前开启智能检索的桶</p>
 */
export class ListMetaSearchBucketsCommand extends $Command<
  ListMetaSearchBucketsCommandInput,
  ListMetaSearchBucketsCommandOutput,
  S3ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListMetaSearchBucketsCommandInput) {
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
  ): Handler<ListMetaSearchBucketsCommandInput, ListMetaSearchBucketsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "ListMetaSearchBucketsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListMetaSearchBucketsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListMetaSearchBucketsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListMetaSearchBucketsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlListMetaSearchBucketsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListMetaSearchBucketsCommandOutput> {
    return deserializeAws_restXmlListMetaSearchBucketsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
