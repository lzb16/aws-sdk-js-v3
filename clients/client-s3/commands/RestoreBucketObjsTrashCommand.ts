import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { RestoreBucketObjsTrashOutput, RestoreBucketObjsTrashRequest } from "../models/models_1";
import {
  deserializeAws_restXmlRestoreBucketObjsTrashCommand,
  serializeAws_restXmlRestoreBucketObjsTrashCommand,
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

export type RestoreBucketObjsTrashCommandInput = RestoreBucketObjsTrashRequest;
export type RestoreBucketObjsTrashCommandOutput = RestoreBucketObjsTrashOutput & __MetadataBearer;

/**
 * <p>批量恢复桶回收站对象</p>
 */
export class RestoreBucketObjsTrashCommand extends $Command<
  RestoreBucketObjsTrashCommandInput,
  RestoreBucketObjsTrashCommandOutput,
  S3ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RestoreBucketObjsTrashCommandInput) {
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
  ): Handler<RestoreBucketObjsTrashCommandInput, RestoreBucketObjsTrashCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getBucketEndpointPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "RestoreBucketObjsTrashCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RestoreBucketObjsTrashRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RestoreBucketObjsTrashOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RestoreBucketObjsTrashCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlRestoreBucketObjsTrashCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RestoreBucketObjsTrashCommandOutput> {
    return deserializeAws_restXmlRestoreBucketObjsTrashCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
