import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListAccountsRequest, ListAccountsResponse } from "../models/models_0";
import { deserializeAws_queryListAccountsCommand, serializeAws_queryListAccountsCommand } from "../protocols/Aws_query";
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

export type ListAccountsCommandInput = ListAccountsRequest;
export type ListAccountsCommandOutput = ListAccountsResponse & __MetadataBearer;

/**
 * <p>Returns information about the access key IDs associated with the specified IAM user.
 *          If there is none, the operation returns an empty list.</p>
 *          <p>Although each user is limited to a small number of keys, you can still paginate the
 *          results using the <code>MaxItems</code> and <code>Marker</code> parameters.</p>
 *          <p>If the <code>UserName</code> field is not specified, the user name is determined
 *          implicitly based on the AWS access key ID used to sign the request. This operation works
 *          for access keys under the AWS account. Consequently, you can use this operation to manage
 *          AWS account root user credentials even if the AWS account has no associated
 *          users.</p>
 *          <note>
 *             <p>To ensure the security of your AWS account, the secret access key is accessible
 *             only during key and user creation.</p>
 *          </note>
 */
export class ListAccountsCommand extends $Command<
  ListAccountsCommandInput,
  ListAccountsCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAccountsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IAMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAccountsCommandInput, ListAccountsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "ListAccountsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAccountsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListAccountsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListAccountsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListAccountsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAccountsCommandOutput> {
    return deserializeAws_queryListAccountsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
