import { S3ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3Client";
import { GetSnapshotInfoOutput, GetSnapshotInfoRequest } from "../models/models_1";
import {
  deserializeAws_restXmlGetSnapshotInfoCommand,
  serializeAws_restXmlGetSnapshotInfoCommand,
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

export type GetSnapshotInfoCommandInput = GetSnapshotInfoRequest;
export type GetSnapshotInfoCommandOutput = GetSnapshotInfoOutput & __MetadataBearer;

/**
 * <p>获取单个快照信息</p>
 */
export class GetSnapshotInfoCommand extends $Command<
  GetSnapshotInfoCommandInput,
  GetSnapshotInfoCommandOutput,
  S3ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSnapshotInfoCommandInput) {
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
  ): Handler<GetSnapshotInfoCommandInput, GetSnapshotInfoCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getBucketEndpointPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "S3Client";
    const commandName = "GetSnapshotInfoCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetSnapshotInfoRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetSnapshotInfoOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSnapshotInfoCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restXmlGetSnapshotInfoCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSnapshotInfoCommandOutput> {
    return deserializeAws_restXmlGetSnapshotInfoCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
