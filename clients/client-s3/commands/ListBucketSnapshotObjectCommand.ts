import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { ListBucketSnapshotObjectOutput, ListBucketSnapshotObjectRequest } from "../models/models_1";
import {
  deserializeAws_restXmlListBucketSnapshotObjectCommand,
  serializeAws_restXmlListBucketSnapshotObjectCommand,
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

export type ListBucketSnapshotObjectCommandInput = ListBucketSnapshotObjectRequest;
export type ListBucketSnapshotObjectCommandOutput = ListBucketSnapshotObjectOutput & __MetadataBearer;

/**
 * <p>获取快照下的对象列表</p>
 */
export class ListBucketSnapshotObjectCommand extends $Command<
  ListBucketSnapshotObjectCommandInput,
  ListBucketSnapshotObjectCommandOutput,
  S3ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListBucketSnapshotObjectCommandInput) {
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
  ): Handler<ListBucketSnapshotObjectCommandInput, ListBucketSnapshotObjectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getBucketEndpointPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "ListBucketSnapshotObjectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListBucketSnapshotObjectRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListBucketSnapshotObjectOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListBucketSnapshotObjectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlListBucketSnapshotObjectCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListBucketSnapshotObjectCommandOutput> {
    return deserializeAws_restXmlListBucketSnapshotObjectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
