import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { PostBucketTrashRequest } from "../models/models_1";
import {
  deserializeAws_restXmlPostBucketTrashCommand,
  serializeAws_restXmlPostBucketTrashCommand,
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

export type PostBucketTrashCommandInput = PostBucketTrashRequest;
export type PostBucketTrashCommandOutput = __MetadataBearer;

/**
 * <p>清空桶回收站对象</p>
 */
export class PostBucketTrashCommand extends $Command<
  PostBucketTrashCommandInput,
  PostBucketTrashCommandOutput,
  S3ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PostBucketTrashCommandInput) {
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
  ): Handler<PostBucketTrashCommandInput, PostBucketTrashCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getBucketEndpointPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "PostBucketTrashCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PostBucketTrashRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PostBucketTrashCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlPostBucketTrashCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PostBucketTrashCommandOutput> {
    return deserializeAws_restXmlPostBucketTrashCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
