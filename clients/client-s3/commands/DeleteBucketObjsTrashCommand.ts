import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { DeleteBucketObjsTrashOutput, DeleteBucketObjsTrashRequest } from "../models/models_0";
import {
  deserializeAws_restXmlDeleteBucketObjsTrashCommand,
  serializeAws_restXmlDeleteBucketObjsTrashCommand,
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

export type DeleteBucketObjsTrashCommandInput = DeleteBucketObjsTrashRequest;
export type DeleteBucketObjsTrashCommandOutput = DeleteBucketObjsTrashOutput & __MetadataBearer;

/**
 * <p>批量删除桶回收站对象</p>
 */
export class DeleteBucketObjsTrashCommand extends $Command<
  DeleteBucketObjsTrashCommandInput,
  DeleteBucketObjsTrashCommandOutput,
  S3ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteBucketObjsTrashCommandInput) {
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
  ): Handler<DeleteBucketObjsTrashCommandInput, DeleteBucketObjsTrashCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getBucketEndpointPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "DeleteBucketObjsTrashCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteBucketObjsTrashRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteBucketObjsTrashOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteBucketObjsTrashCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlDeleteBucketObjsTrashCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteBucketObjsTrashCommandOutput> {
    return deserializeAws_restXmlDeleteBucketObjsTrashCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
