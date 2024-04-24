import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UpdateGroupDescriptionRequest } from "../models/models_1";
import {
  deserializeAws_queryUpdateGroupDescriptionCommand,
  serializeAws_queryUpdateGroupDescriptionCommand,
} from "../protocols/Aws_query";
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

export type UpdateGroupDescriptionCommandInput = UpdateGroupDescriptionRequest;
export type UpdateGroupDescriptionCommandOutput = __MetadataBearer;

/**
 * <p>Updates the name and/or the path of the specified IAM group.</p>
 *          <important>
 *             <p> You should understand the implications of changing a group's path or name. For more
 *             information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_WorkingWithGroupsAndUsers.html">Renaming Users and
 *                Groups</a> in the <i>IAM User Guide</i>.</p>
 *          </important>
 *          <note>
 *             <p>The person making the request (the principal), must have permission to change the
 *             role group with the old name and the new name. For example, to change the group named
 *                <code>Managers</code> to <code>MGRs</code>, the principal must have a policy that
 *             allows them to update both groups. If the principal has permission to update the
 *                <code>Managers</code> group, but not the <code>MGRs</code> group, then the update
 *             fails. For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access Management</a>. </p>
 *          </note>
 */
export class UpdateGroupDescriptionCommand extends $Command<
  UpdateGroupDescriptionCommandInput,
  UpdateGroupDescriptionCommandOutput,
  IAMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateGroupDescriptionCommandInput) {
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
  ): Handler<UpdateGroupDescriptionCommandInput, UpdateGroupDescriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IAMClient";
    const commandName = "UpdateGroupDescriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateGroupDescriptionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateGroupDescriptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryUpdateGroupDescriptionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateGroupDescriptionCommandOutput> {
    return deserializeAws_queryUpdateGroupDescriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
