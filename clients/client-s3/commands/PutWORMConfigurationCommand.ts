import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { PutWORMConfigurationOutput, PutWORMConfigurationRequest } from "../models/models_1";
import {
  deserializeAws_restXmlPutWORMConfigurationCommand,
  serializeAws_restXmlPutWORMConfigurationCommand,
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

export type PutWORMConfigurationCommandInput = PutWORMConfigurationRequest;
export type PutWORMConfigurationCommandOutput = PutWORMConfigurationOutput & __MetadataBearer;

/**
 * <p>Places an WORM configuration on the specified bucket. The rule specified in the
 *          WORM configuration will be applied by default to every new object placed in the
 *          specified bucket.
 *       </p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>The <code>WORMDefaultRetention</code> settings require a
 *                period.</p>
 *                </li>
 *                <li>
 *                   <p>The <code>WORMDefaultRetention</code> period can be either <code>Days</code>
 *                or <code>Years</code> but you must select one. You cannot specify <code>Days</code>
 *                and <code>Years</code> at the same time.</p>
 *                </li>
 *                <li>
 *                   <p>You can only enable WORM for new buckets. If you want to turn on
 *                WORM for an existing bucket, contact AWS Support.</p>
 *                </li>
 *             </ul>
 *          </note>
 */
export class PutWORMConfigurationCommand extends $Command<
  PutWORMConfigurationCommandInput,
  PutWORMConfigurationCommandOutput,
  S3ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutWORMConfigurationCommandInput) {
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
  ): Handler<PutWORMConfigurationCommandInput, PutWORMConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getBucketEndpointPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "PutWORMConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutWORMConfigurationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: PutWORMConfigurationOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutWORMConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlPutWORMConfigurationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutWORMConfigurationCommandOutput> {
    return deserializeAws_restXmlPutWORMConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
