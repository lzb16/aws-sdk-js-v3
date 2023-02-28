import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { PutWORMRetainPeriodOutput, PutWORMRetainPeriodRequest } from "../models/models_1";
import {
  deserializeAws_restXmlPutWORMRetainPeriodCommand,
  serializeAws_restXmlPutWORMRetainPeriodCommand,
} from "../protocols/Aws_restXml";
import { getBucketEndpointPlugin } from "@aws-sdk/middleware-bucket-endpoint";
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

export type PutWORMRetainPeriodCommandInput = PutWORMRetainPeriodRequest;
export type PutWORMRetainPeriodCommandOutput = PutWORMRetainPeriodOutput & __MetadataBearer;

/**
 * <p>Applies a Retain Period configuration to the specified object.</p>
 *          <p>This action is not supported by Amazon S3 on Outposts.</p>
 */
export class PutWORMRetainPeriodCommand extends $Command<
  PutWORMRetainPeriodCommandInput,
  PutWORMRetainPeriodCommandOutput,
  S3ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutWORMRetainPeriodCommandInput) {
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
  ): Handler<PutWORMRetainPeriodCommandInput, PutWORMRetainPeriodCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getBucketEndpointPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "PutWORMRetainPeriodCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutWORMRetainPeriodRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutWORMRetainPeriodOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutWORMRetainPeriodCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlPutWORMRetainPeriodCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutWORMRetainPeriodCommandOutput> {
    return deserializeAws_restXmlPutWORMRetainPeriodCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
