import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { GetBucketQuotaOutput, GetBucketQuotaRequest } from "../models/models_0";
import {
  deserializeAws_restXmlGetBucketQuotaCommand,
  serializeAws_restXmlGetBucketQuotaCommand,
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

export type GetBucketQuotaCommandInput = GetBucketQuotaRequest;
export type GetBucketQuotaCommandOutput = GetBucketQuotaOutput & __MetadataBearer;

/**
 * <p>This implementation of the <code>GET</code> operation uses the <code>overview</code>
 *          subresource to return the access control list (ACL) of a bucket. To use <code>GET</code> to
 *          return the ACL of the bucket, you must have <code>READ_ACP</code> access to the bucket. If
 *             <code>READ_ACP</code> permission is granted to the anonymous user, you can return the
 *          ACL of the bucket without using an authorization header.</p>
 *
 *          <p class="title">
 *             <b>Related Resources</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListObjects.html">ListObjects</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class GetBucketQuotaCommand extends $Command<
  GetBucketQuotaCommandInput,
  GetBucketQuotaCommandOutput,
  S3ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetBucketQuotaCommandInput) {
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
  ): Handler<GetBucketQuotaCommandInput, GetBucketQuotaCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getBucketEndpointPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "GetBucketQuotaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetBucketQuotaRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetBucketQuotaOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetBucketQuotaCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetBucketQuotaCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetBucketQuotaCommandOutput> {
    return deserializeAws_restXmlGetBucketQuotaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
