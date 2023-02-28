import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum AccessAdvisorUsageGranularityType {
  ACTION_LEVEL = "ACTION_LEVEL",
  SERVICE_LEVEL = "SERVICE_LEVEL",
}

/**
 * <p>An object that contains details about when a principal in the reported AWS Organizations entity
 *          last attempted to access an AWS service. A principal can be an IAM user, an IAM role,
 *          or the AWS account root user within the reported Organizations entity.</p>
 *          <p>This data type is a response element in the <a>GetOrganizationsAccessReport</a> operation.</p>
 */
export interface AccessDetail {
  /**
   * <p>The name of the service in which access was attempted.</p>
   */
  ServiceName: string | undefined;

  /**
   * <p>The namespace of the service in which access was attempted.</p>
   *          <p>To learn the service namespace of a service, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_actions-resources-contextkeys.html">Actions,
   *             Resources, and Condition Keys for AWS Services</a> in the
   *             <i>IAM User Guide</i>. Choose the name of the service to view details
   *          for that service. In the first paragraph, find the service prefix. For example,
   *             <code>(service prefix: a4b)</code>. For more information about service namespaces, see
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">AWS
   *             Service Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  ServiceNamespace: string | undefined;

  /**
   * <p>The Region where the last service access attempt occurred.</p>
   *          <p>This field is null if no principals in the reported Organizations entity attempted to access the
   *          service within the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">reporting period</a>.</p>
   */
  Region?: string;

  /**
   * <p>The path of the Organizations entity (root, organizational unit, or account) from which an
   *          authenticated principal last attempted to access the service. AWS does not report
   *          unauthenticated requests.</p>
   *          <p>This field is null if no principals (IAM users, IAM roles, or root users) in the
   *          reported Organizations entity attempted to access the service within the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">reporting period</a>.</p>
   */
  EntityPath?: string;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when an authenticated principal most recently attempted to access the
   *          service. AWS does not report unauthenticated requests.</p>
   *          <p>This field is null if no principals in the reported Organizations entity attempted to access the
   *          service within the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">reporting period</a>.</p>
   */
  LastAuthenticatedTime?: Date;

  /**
   * <p>The number of accounts with authenticated principals (root users, IAM users, and IAM
   *          roles) that attempted to access the service in the reporting period.</p>
   */
  TotalAuthenticatedEntities?: number;
}

export namespace AccessDetail {
  export const filterSensitiveLog = (obj: AccessDetail): any => ({
    ...obj,
  });
}

export type StatusType = "Active" | "Inactive";

/**
 * <p>Contains information about an AWS access key.</p>
 *          <p> This data type is used as a response element in the <a>CreateAccessKey</a>
 *          and <a>ListAccessKeys</a> operations. </p>
 *          <note>
 *             <p>The <code>SecretAccessKey</code> value is returned only in response to <a>CreateAccessKey</a>. You can get a secret access key only when you first
 *             create an access key; you cannot recover the secret access key later. If you lose a
 *             secret access key, you must create a new access key.</p>
 *          </note>
 */
export interface AccessKey {
  /**
   * <p>The name of the IAM user that the access key is associated with.</p>
   */
  UserName: string | undefined;

  /**
   * <p>The ID for this access key.</p>
   */
  AccessKeyId: string | undefined;

  /**
   * <p>The secret key used to sign requests.</p>
   */
  SecretAccessKey: string | undefined;

  /**
   * <p>The access key key type. 1  means for system, not show on web; 2 means common access key.</p>
   */
  AccessKeyType?: number;

  /**
   * <p>The status of the access key. <code>Active</code> means that the key is valid for API
   *          calls, while <code>Inactive</code> means it is not. </p>
   */
  Status: StatusType | string | undefined;

  /**
   * <p>The date when the access key was created.</p>
   */
  CreateDate?: Date;
}

export namespace AccessKey {
  export const filterSensitiveLog = (obj: AccessKey): any => ({
    ...obj,
    ...(obj.SecretAccessKey && { SecretAccessKey: SENSITIVE_STRING }),
  });
}

/**
 * <p>Contains information about the last time an AWS access key was used since IAM began
 *          tracking this information on April 22, 2015.</p>
 *          <p>This data type is used as a response element in the <a>GetAccessKeyLastUsed</a> operation.</p>
 */
export interface AccessKeyLastUsed {
  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the access key was most recently used. This field is null in the
   *          following situations:</p>
   *          <ul>
   *             <li>
   *                <p>The user does not have an access key.</p>
   *             </li>
   *             <li>
   *                <p>An access key exists but has not been used since IAM began tracking this
   *                information.</p>
   *             </li>
   *             <li>
   *                <p>There is no sign-in data associated with the user.</p>
   *             </li>
   *          </ul>
   */
  LastUsedDate: Date | undefined;

  /**
   * <p>The name of the AWS service with which this access key was most recently used. The value
   *          of this field is "N/A" in the following situations:</p>
   *          <ul>
   *             <li>
   *                <p>The user does not have an access key.</p>
   *             </li>
   *             <li>
   *                <p>An access key exists but has not been used since IAM started tracking this
   *                information.</p>
   *             </li>
   *             <li>
   *                <p>There is no sign-in data associated with the user.</p>
   *             </li>
   *          </ul>
   */
  ServiceName: string | undefined;

  /**
   * <p>The AWS Region where this access key was most recently used. The value for this field is
   *          "N/A" in the following situations:</p>
   *          <ul>
   *             <li>
   *                <p>The user does not have an access key.</p>
   *             </li>
   *             <li>
   *                <p>An access key exists but has not been used since IAM began tracking this
   *                information.</p>
   *             </li>
   *             <li>
   *                <p>There is no sign-in data associated with the user.</p>
   *             </li>
   *          </ul>
   *          <p>For more information about AWS Regions, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html">Regions and Endpoints</a> in the Amazon Web Services
   *          General Reference.</p>
   */
  Region: string | undefined;
}

export namespace AccessKeyLastUsed {
  export const filterSensitiveLog = (obj: AccessKeyLastUsed): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about an AWS access key, without its secret key.</p>
 *          <p>This data type is used as a response element in the <a>ListAccessKeys</a>
 *          operation.</p>
 */
export interface AccessKeyMetadata {
  /**
   * <p>The name of the IAM user that the key is associated with.</p>
   */
  UserName?: string;

  /**
   * <p>The ID for this access key.</p>
   */
  AccessKeyId?: string;

  /**
   * <p>The secret key(SK).</p>
   */
  SecretAccessKey?: string;

  /**
   * <p>The description of the access key.</p>
   */
  Description?: string;

  /**
   * <p>The status of the access key. <code>Active</code> means that the key is valid for API
   *          calls; <code>Inactive</code> means it is not.</p>
   */
  Status?: StatusType | string;

  /**
   * <p>The date when the access key was created.</p>
   */
  CreateDate?: Date;
}

export namespace AccessKeyMetadata {
  export const filterSensitiveLog = (obj: AccessKeyMetadata): any => ({
    ...obj,
    ...(obj.SecretAccessKey && { SecretAccessKey: SENSITIVE_STRING }),
  });
}

/**
 * <p>Account group info.</p>
 */
export interface AccountGroupType {
  /**
   * <p>Account group Name.</p>
   */
  GroupName?: string;

  /**
   * <p>Account group Id.</p>
   */
  GroupId?: string;

  /**
   * <p>Account group description.</p>
   */
  Description?: string;

  /**
   * <p>The quota of the account group you want to create.</p>
   */
  QuotaCapacitySize?: string;

  /**
   * <p>The quota of the account group you want to create.</p>
   */
  QuotaObjectNumber?: string;

  /**
   * <p>Account group object number.</p>
   */
  ObjectNumber?: string;

  /**
   * <p>Account group used size.</p>
   */
  UsedSize?: string;
}

export namespace AccountGroupType {
  export const filterSensitiveLog = (obj: AccountGroupType): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about an IAM group entity.</p>
 *          <p>This data type is used as a response element in the following operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateGroup</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetGroup</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListGroups</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface Group {
  /**
   * <p>The path to the group. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the
   *             <i>IAM User Guide</i>. </p>
   */
  Path: string | undefined;

  /**
   * <p>The friendly name that identifies the group.</p>
   */
  GroupName: string | undefined;

  /**
   * <p> The stable and unique string identifying the group. For more information about IDs, see
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
   *             Identifiers</a> in the <i>IAM User Guide</i>. </p>
   */
  GroupId: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) specifying the group. For more information about ARNs
   *          and how to use them in policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the
   *             <i>IAM User Guide</i>. </p>
   */
  Arn: string | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the group was created.</p>
   */
  CreateDate: Date | undefined;
}

export namespace Group {
  export const filterSensitiveLog = (obj: Group): any => ({
    ...obj,
  });
}

export enum PermissionsBoundaryAttachmentType {
  Policy = "PermissionsBoundaryPolicy",
}

/**
 * <p>Contains information about an attached permissions boundary.</p>
 *          <p>An attached permissions boundary is a managed policy that has been attached to a user or
 *          role to set the permissions boundary.</p>
 *          <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions Boundaries for IAM
 *             Identities </a> in the <i>IAM User Guide</i>.</p>
 */
export interface AttachedPermissionsBoundary {
  /**
   * <p> The permissions boundary usage type that indicates what type of IAM resource is used
   *          as the permissions boundary for an entity. This data type can only have a value of
   *             <code>Policy</code>.</p>
   */
  PermissionsBoundaryType?: PermissionsBoundaryAttachmentType | string;

  /**
   * <p> The ARN of the policy used to set the permissions boundary for the user or role.</p>
   */
  PermissionsBoundaryArn?: string;
}

export namespace AttachedPermissionsBoundary {
  export const filterSensitiveLog = (obj: AttachedPermissionsBoundary): any => ({
    ...obj,
  });
}

/**
 * <p>A structure that represents user-provided metadata that can be associated with a
 *       resource such as an IAM user or role. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM Identities</a> in the
 *         <i>IAM User Guide</i>.</p>
 */
export interface Tag {
  /**
   * <p>The key name that can be used to look up or retrieve the associated value. For example,
   *         <code>Department</code> or <code>Cost Center</code> are common choices.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value associated with this tag. For example, tags with a key name of
   *         <code>Department</code> could have values such as <code>Human Resources</code>,
   *         <code>Accounting</code>, and <code>Support</code>. Tags with a key name of <code>Cost
   *         Center</code> might have values that consist of the number associated with the different
   *       cost centers in your company. Typically, many resources have tags with the same key name but
   *       with different values.</p>
   *          <note>
   *             <p>AWS always interprets the tag <code>Value</code> as a single string. If you need to
   *         store an array, you can store comma-separated values in the string. However, you must
   *         interpret the value in your code.</p>
   *          </note>
   */
  Value: string | undefined;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export type UserStatusType = "active" | "inactive";

/**
 * <p>Contains information about an IAM user entity.</p>
 *          <p>This data type is used as a response element in the following operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateUser</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetUser</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListUsers</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface User {
  /**
   * <p>The path to the user. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the
   *             <i>IAM User Guide</i>.</p>
   */
  Path: string | undefined;

  /**
   * <p>The friendly name identifying the user.</p>
   */
  UserName: string | undefined;

  /**
   * <p>The stable and unique string identifying the user. For more information about IDs, see
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
   *             Identifiers</a> in the <i>IAM User Guide</i>.</p>
   */
  UserId: string | undefined;

  /**
   * <p>User name, required when LoginType is 2.</p>
   */
  Email?: string;

  /**
   * <p>The Amazon Resource Name (ARN) that identifies the user. For more information about ARNs
   *          and how to use ARNs in policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the
   *             <i>IAM User Guide</i>. </p>
   */
  Arn: string | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the user was created.</p>
   */
  CreateDate: Date | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the user's password was last used to sign in to an AWS website. For
   *          a list of AWS websites that capture a user's last sign-in time, see the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Credential
   *             Reports</a> topic in the <i>IAM User Guide</i>. If a password is
   *          used more than once in a five-minute span, only the first use is returned in this field. If
   *          the field is null (no value), then it indicates that they never signed in with a password.
   *          This can be because:</p>
   *          <ul>
   *             <li>
   *                <p>The user never had a password.</p>
   *             </li>
   *             <li>
   *                <p>A password exists but has not been used since IAM started tracking this
   *                information on October 20, 2014.</p>
   *             </li>
   *          </ul>
   *          <p>A null value does not mean that the user <i>never</i> had a password.
   *          Also, if the user does not currently have a password but had one in the past, then this
   *          field contains the date and time the most recent password was used.</p>
   *          <p>This value is returned only in the <a>GetUser</a> and <a>ListUsers</a> operations. </p>
   */
  PasswordLastUsed?: Date;

  /**
   * <p>The ARN of the policy used to set the permissions boundary for the user.</p>
   *          <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions Boundaries for IAM
   *             Identities </a> in the <i>IAM User Guide</i>.</p>
   */
  PermissionsBoundary?: AttachedPermissionsBoundary;

  /**
   * <p>A list of tags that are associated with the specified user. For more information about
   *       tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM
   *         Identities</a> in the <i>IAM User Guide</i>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>0 means default, 1 means custom.</p>
   */
  Type?: number;

  /**
   * <p>Description of user.</p>
   */
  Description?: string;

  /**
   * <p>Status of user.</p>
   */
  UserStatus?: UserStatusType | string;

  /**
   * <p>A list of groups.</p>
   */
  Groups: Group[] | undefined;

  /**
   * <p>Last password reset time.</p>
   */
  PasswordLastReset?: Date;

  /**
   * <p>1 means built-in, use to web. 2 means ordinary, use to client.</p>
   */
  AccessKeyType?: number;

  /**
   * <p>Account Name.</p>
   */
  AccountName?: string;

  /**
   * <p>Account Id.</p>
   */
  AccountId?: string;
}

export namespace User {
  export const filterSensitiveLog = (obj: User): any => ({
    ...obj,
  });
}

/**
 * <p>Account info.</p>
 */
export interface AccountType {
  /**
   * <p>Account Name.</p>
   */
  AccountName?: string;

  /**
   * <p>Account Id.</p>
   */
  AccountId?: string;

  /**
   * <p>Account group Name.</p>
   */
  GroupName?: string;

  /**
   * <p>Account group Id.</p>
   */
  GroupId?: string;

  /**
   * <p>Path.</p>
   */
  Path?: string;

  /**
   * <p>Account description.</p>
   */
  AccountDesc?: string;

  /**
   * <p>Account arn.</p>
   */
  Arn?: string;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the user was created.</p>
   */
  CreateDate: Date | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the user's password was last used to sign in to an AWS website. For
   *          a list of AWS websites that capture a user's last sign-in time, see the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Credential
   *             Reports</a> topic in the <i>IAM User Guide</i>. If a password is
   *          used more than once in a five-minute span, only the first use is returned in this field. If
   *          the field is null (no value), then it indicates that they never signed in with a password.
   *          This can be because:</p>
   *          <ul>
   *             <li>
   *                <p>The user never had a password.</p>
   *             </li>
   *             <li>
   *                <p>A password exists but has not been used since IAM started tracking this
   *                information on October 20, 2014.</p>
   *             </li>
   *          </ul>
   *          <p>A null value does not mean that the user <i>never</i> had a password.
   *          Also, if the user does not currently have a password but had one in the past, then this
   *          field contains the date and time the most recent password was used.</p>
   *          <p>This value is returned only in the <a>GetUser</a> and <a>ListUsers</a> operations. </p>
   */
  PasswordLastUsed?: Date;

  /**
   * <p>Account email.</p>
   */
  Email?: string;

  /**
   * <p>The quota of the account you want to create.</p>
   */
  QuotaCapacitySize?: string;

  /**
   * <p>The quota of the account you want to create.</p>
   */
  QuotaObjectNumber?: string;

  /**
   * <p>Account bucket number.</p>
   */
  BucketNumber?: number;

  /**
   * <p>Account object number.</p>
   */
  ObjectNumber?: string;

  /**
   * <p>Account used size.</p>
   */
  UsedSize?: string;

  /**
   * <p>The access keys of account.</p>
   */
  AccessKeys?: AccessKey[];

  /**
   * <p>User info.</p>
   */
  User?: User;
}

export namespace AccountType {
  export const filterSensitiveLog = (obj: AccountType): any => ({
    ...obj,
    ...(obj.AccessKeys && { AccessKeys: obj.AccessKeys.map((item) => AccessKey.filterSensitiveLog(item)) }),
  });
}

export interface AddAccountToGroupRequest {
  /**
   * <p>Account group name.</p>
   */
  GroupName?: string;

  /**
   * <p>Account name.</p>
   */
  AccountName?: string;
}

export namespace AddAccountToGroupRequest {
  export const filterSensitiveLog = (obj: AddAccountToGroupRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 */
export interface ServiceFailureException extends __SmithyException, $MetadataBearer {
  name: "ServiceFailureException";
  $fault: "server";
  message?: string;
}

export namespace ServiceFailureException {
  export const filterSensitiveLog = (obj: ServiceFailureException): any => ({
    ...obj,
  });
}

export interface AddClientIDToOpenIDConnectProviderRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM OpenID Connect (OIDC) provider resource to
   *          add the client ID to. You can get a list of OIDC provider ARNs by using the <a>ListOpenIDConnectProviders</a> operation.</p>
   */
  OpenIDConnectProviderArn: string | undefined;

  /**
   * <p>The client ID (also known as audience) to add to the IAM OpenID Connect provider
   *          resource.</p>
   */
  ClientID: string | undefined;
}

export namespace AddClientIDToOpenIDConnectProviderRequest {
  export const filterSensitiveLog = (obj: AddClientIDToOpenIDConnectProviderRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 */
export interface InvalidInputException extends __SmithyException, $MetadataBearer {
  name: "InvalidInputException";
  $fault: "client";
  message?: string;
}

export namespace InvalidInputException {
  export const filterSensitiveLog = (obj: InvalidInputException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because it attempted to create resources beyond the current
 *       AWS account limitations. The error message describes the limit exceeded.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because it referenced a resource entity that does not exist. The error
 *       message describes the resource.</p>
 */
export interface NoSuchEntityException extends __SmithyException, $MetadataBearer {
  name: "NoSuchEntityException";
  $fault: "client";
  message?: string;
}

export namespace NoSuchEntityException {
  export const filterSensitiveLog = (obj: NoSuchEntityException): any => ({
    ...obj,
  });
}

export interface AddRoleToInstanceProfileRequest {
  /**
   * <p>The name of the instance profile to update.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  InstanceProfileName: string | undefined;

  /**
   * <p>The name of the role to add.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  RoleName: string | undefined;
}

export namespace AddRoleToInstanceProfileRequest {
  export const filterSensitiveLog = (obj: AddRoleToInstanceProfileRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because it attempted to create a resource that already
 *       exists.</p>
 */
export interface EntityAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "EntityAlreadyExistsException";
  $fault: "client";
  message?: string;
}

export namespace EntityAlreadyExistsException {
  export const filterSensitiveLog = (obj: EntityAlreadyExistsException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because only the service that depends on the service-linked
 *       role can modify or delete the role on your behalf. The error message includes the name of the
 *       service that depends on this service-linked role. You must request the change through that
 *       service.</p>
 */
export interface UnmodifiableEntityException extends __SmithyException, $MetadataBearer {
  name: "UnmodifiableEntityException";
  $fault: "client";
  message?: string;
}

export namespace UnmodifiableEntityException {
  export const filterSensitiveLog = (obj: UnmodifiableEntityException): any => ({
    ...obj,
  });
}

export interface AddUserToGroupRequest {
  /**
   * <p>The name of the group to update.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The name of the user to add.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;
}

export namespace AddUserToGroupRequest {
  export const filterSensitiveLog = (obj: AddUserToGroupRequest): any => ({
    ...obj,
  });
}

export type AssignmentStatusType = "Any" | "Assigned" | "Unassigned";

/**
 * <p>Contains information about an attached policy.</p>
 *          <p>An attached policy is a managed policy that has been attached to a user, group, or role.
 *          This data type is used as a response element in the <a>ListAttachedGroupPolicies</a>, <a>ListAttachedRolePolicies</a>, <a>ListAttachedUserPolicies</a>, and <a>GetAccountAuthorizationDetails</a> operations. </p>
 *          <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline
 *             Policies</a> in the <i>IAM User Guide</i>. </p>
 */
export interface AttachedPolicy {
  /**
   * <p>The friendly name of the attached policy.</p>
   */
  PolicyName?: string;

  /**
   * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p>
   *          <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS
   *             Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
   */
  PolicyArn?: string;
}

export namespace AttachedPolicy {
  export const filterSensitiveLog = (obj: AttachedPolicy): any => ({
    ...obj,
  });
}

export interface AttachGroupPolicyRequest {
  /**
   * <p>The name (friendly name, not ARN) of the group to attach the policy to.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM policy you want to attach.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  PolicyArn: string | undefined;
}

export namespace AttachGroupPolicyRequest {
  export const filterSensitiveLog = (obj: AttachGroupPolicyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The request failed because AWS service role policies can only be attached to the
 *       service-linked role for that service.</p>
 */
export interface PolicyNotAttachableException extends __SmithyException, $MetadataBearer {
  name: "PolicyNotAttachableException";
  $fault: "client";
  message?: string;
}

export namespace PolicyNotAttachableException {
  export const filterSensitiveLog = (obj: PolicyNotAttachableException): any => ({
    ...obj,
  });
}

export interface AttachRolePolicyRequest {
  /**
   * <p>The name (friendly name, not ARN) of the role to attach the policy to.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  RoleName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM policy you want to attach.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  PolicyArn: string | undefined;
}

export namespace AttachRolePolicyRequest {
  export const filterSensitiveLog = (obj: AttachRolePolicyRequest): any => ({
    ...obj,
  });
}

export interface AttachUserPolicyRequest {
  /**
   * <p>The name (friendly name, not ARN) of the IAM user to attach the policy to.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM policy you want to attach.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  PolicyArn: string | undefined;
}

export namespace AttachUserPolicyRequest {
  export const filterSensitiveLog = (obj: AttachUserPolicyRequest): any => ({
    ...obj,
  });
}

export interface ChangeAccountDescriptionRequest {
  /**
   * <p>Account name.</p>
   */
  AccountName?: string;

  /**
   * <p>Description</p>
   */
  Description?: string;
}

export namespace ChangeAccountDescriptionRequest {
  export const filterSensitiveLog = (obj: ChangeAccountDescriptionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because it referenced an entity that is temporarily
 *       unmodifiable, such as a user name that was deleted and then recreated. The error indicates
 *       that the request is likely to succeed if you try again after waiting several minutes. The
 *       error message describes the entity.</p>
 */
export interface EntityTemporarilyUnmodifiableException extends __SmithyException, $MetadataBearer {
  name: "EntityTemporarilyUnmodifiableException";
  $fault: "client";
  message?: string;
}

export namespace EntityTemporarilyUnmodifiableException {
  export const filterSensitiveLog = (obj: EntityTemporarilyUnmodifiableException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because the provided password did not meet the requirements
 *       imposed by the account password policy.</p>
 */
export interface PasswordPolicyViolationException extends __SmithyException, $MetadataBearer {
  name: "PasswordPolicyViolationException";
  $fault: "client";
  message?: string;
}

export namespace PasswordPolicyViolationException {
  export const filterSensitiveLog = (obj: PasswordPolicyViolationException): any => ({
    ...obj,
  });
}

export interface ChangeAccountPasswordRequest {
  /**
   * <p>Account name.</p>
   */
  AccountName?: string;

  /**
   * <p>The IAM account's current password.</p>
   */
  OldPassword: string | undefined;

  /**
   * <p>The new password.</p>
   */
  NewPassword: string | undefined;
}

export namespace ChangeAccountPasswordRequest {
  export const filterSensitiveLog = (obj: ChangeAccountPasswordRequest): any => ({
    ...obj,
    ...(obj.OldPassword && { OldPassword: SENSITIVE_STRING }),
    ...(obj.NewPassword && { NewPassword: SENSITIVE_STRING }),
  });
}

export interface ChangePasswordRequest {
  /**
   * <p>The IAM user's current password.</p>
   */
  OldPassword: string | undefined;

  /**
   * <p>The new password. The new password must conform to the AWS account's password policy,
   *          if one exists.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     that is used to validate this parameter is a string of characters. That string can include almost any printable
   *     ASCII character from the space (<code>\u0020</code>) through the end of the ASCII character range (<code>\u00FF</code>).
   *     You can also include the tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and carriage return (<code>\u000D</code>)
   *     characters. Any of these characters are valid in a password. However, many tools, such
   *     as the AWS Management Console, might restrict the ability to type certain characters because they have
   *     special meaning within that tool.</p>
   */
  NewPassword: string | undefined;
}

export namespace ChangePasswordRequest {
  export const filterSensitiveLog = (obj: ChangePasswordRequest): any => ({
    ...obj,
    ...(obj.OldPassword && { OldPassword: SENSITIVE_STRING }),
    ...(obj.NewPassword && { NewPassword: SENSITIVE_STRING }),
  });
}

/**
 * <p>The request was rejected because the type of user for the transaction was
 *       incorrect.</p>
 */
export interface InvalidUserTypeException extends __SmithyException, $MetadataBearer {
  name: "InvalidUserTypeException";
  $fault: "client";
  message?: string;
}

export namespace InvalidUserTypeException {
  export const filterSensitiveLog = (obj: InvalidUserTypeException): any => ({
    ...obj,
  });
}

export interface CheckServicePermissionRequest {
  /**
   * <p>s3, iam, all</p>
   */
  ServiceType: string | undefined;
}

export namespace CheckServicePermissionRequest {
  export const filterSensitiveLog = (obj: CheckServicePermissionRequest): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface Service {
  /**
   * <p>success or failed</p>
   */
  Result?: string;

  /**
   * <p>s3 or iam</p>
   */
  Name?: string;

  /**
   * <p>permission type.</p>
   */
  Permissions?: string[];
}

export namespace Service {
  export const filterSensitiveLog = (obj: Service): any => ({
    ...obj,
  });
}

export interface CheckServicePermissionResponse {
  /**
   * <p>Services permission type.</p>
   */
  Services?: Service[];
}

export namespace CheckServicePermissionResponse {
  export const filterSensitiveLog = (obj: CheckServicePermissionResponse): any => ({
    ...obj,
  });
}

export interface CreateAccessKeyRequest {
  /**
   * <p>The name of the IAM user that the new key will belong to.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName?: string;
}

export namespace CreateAccessKeyRequest {
  export const filterSensitiveLog = (obj: CreateAccessKeyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>CreateAccessKey</a> request.
 *     </p>
 */
export interface CreateAccessKeyResponse {
  /**
   * <p>A structure with details about the access key.</p>
   */
  AccessKey: AccessKey | undefined;
}

export namespace CreateAccessKeyResponse {
  export const filterSensitiveLog = (obj: CreateAccessKeyResponse): any => ({
    ...obj,
    ...(obj.AccessKey && { AccessKey: AccessKey.filterSensitiveLog(obj.AccessKey) }),
  });
}

export interface CreateAccountRequest {
  /**
   * <p>Account name.</p>
   */
  AccountName?: string;

  /**
   * <p>The email of account to create.</p>
   */
  Email?: string;

  /**
   * <p>Password</p>
   */
  Password?: string;

  /**
   * <p>Access type, 1 means web, 2 means api, 3 means all.</p>
   */
  AccessType?: number;

  /**
   * <p>Description</p>
   */
  Description?: string;

  /**
   * <p>First login is update password, 0 means no, 1 means yes.</p>
   */
  FirstLoginUpdatePassword?: number;

  /**
   * <p>The quota of the account you want to create.</p>
   */
  Quota?: string;

  /**
   * <p>The custom ak of the account you want to create.</p>
   */
  SelfdefineAccessKeyId?: string;

  /**
   * <p>The custom sk of the account you want to create.</p>
   */
  SelfdefineSecretAccessKey?: string;
}

export namespace CreateAccountRequest {
  export const filterSensitiveLog = (obj: CreateAccountRequest): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING }),
  });
}

export interface CreateAccountResponse {
  /**
   * <p>The account to create.</p>
   */
  Account: AccountType | undefined;
}

export namespace CreateAccountResponse {
  export const filterSensitiveLog = (obj: CreateAccountResponse): any => ({
    ...obj,
    ...(obj.Account && { Account: AccountType.filterSensitiveLog(obj.Account) }),
  });
}

export interface CreateAccountAliasRequest {
  /**
   * <p>The account alias to create.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of
   *     lowercase letters, digits, and dashes. You cannot start or finish with a dash, nor can you have
   *     two dashes in a row.</p>
   */
  AccountAlias: string | undefined;
}

export namespace CreateAccountAliasRequest {
  export const filterSensitiveLog = (obj: CreateAccountAliasRequest): any => ({
    ...obj,
  });
}

export interface CreateAccountGroupRequest {
  /**
   * <p>Account group name.</p>
   */
  GroupName?: string;

  /**
   * <p>Description</p>
   */
  Description?: string;
}

export namespace CreateAccountGroupRequest {
  export const filterSensitiveLog = (obj: CreateAccountGroupRequest): any => ({
    ...obj,
  });
}

export interface CreateAccountGroupResponse {
  /**
   * <p>The account group to create.</p>
   */
  Group: AccountGroupType | undefined;
}

export namespace CreateAccountGroupResponse {
  export const filterSensitiveLog = (obj: CreateAccountGroupResponse): any => ({
    ...obj,
  });
}

export interface CreateGroupRequest {
  /**
   * <p> The path to the group. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
   *             Identifiers</a> in the <i>IAM User Guide</i>.</p>
   *          <p>This parameter is optional. If it is not included, it defaults to a slash (/).</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  Path?: string;

  /**
   * <p>The name of the group to create. Do not include the path in this value.</p>
   *          <p>IAM user, group, role, and policy names must be unique within the account. Names are
   *          not distinguished by case. For example, you cannot create resources named both "MyResource"
   *          and "myresource".</p>
   */
  GroupName: string | undefined;
}

export namespace CreateGroupRequest {
  export const filterSensitiveLog = (obj: CreateGroupRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>CreateGroup</a> request. </p>
 */
export interface CreateGroupResponse {
  /**
   * <p>A structure containing details about the new group.</p>
   */
  Group: Group | undefined;
}

export namespace CreateGroupResponse {
  export const filterSensitiveLog = (obj: CreateGroupResponse): any => ({
    ...obj,
  });
}

export interface CreateInstanceProfileRequest {
  /**
   * <p>The name of the instance profile to create.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  InstanceProfileName: string | undefined;

  /**
   * <p> The path to the instance profile. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
   *             Identifiers</a> in the <i>IAM User Guide</i>.</p>
   *          <p>This parameter is optional. If it is not included, it defaults to a slash (/).</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  Path?: string;
}

export namespace CreateInstanceProfileRequest {
  export const filterSensitiveLog = (obj: CreateInstanceProfileRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the last time that an IAM role was used. This includes the
 *          date and time and the Region in which the role was last used. Activity is only reported for
 *          the trailing 400 days. This period can be shorter if your Region began supporting these
 *          features within the last year. The role might have been used more than 400 days ago. For
 *          more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#access-advisor_tracking-period">Regions Where Data Is Tracked</a> in the <i>IAM User
 *          Guide</i>.</p>
 *          <p>This data type is returned as a response element in the <a>GetRole</a> and
 *             <a>GetAccountAuthorizationDetails</a> operations.</p>
 */
export interface RoleLastUsed {
  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a> that the role was last used.</p>
   *          <p>This field is null if the role has not been used within the IAM tracking period. For
   *          more information about the tracking period, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#access-advisor_tracking-period">Regions Where Data Is Tracked</a> in the <i>IAM User Guide</i>.
   *       </p>
   */
  LastUsedDate?: Date;

  /**
   * <p>The name of the AWS Region in which the role was last used.</p>
   */
  Region?: string;
}

export namespace RoleLastUsed {
  export const filterSensitiveLog = (obj: RoleLastUsed): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about an IAM role. This structure is returned as a response
 *          element in several API operations that interact with roles.</p>
 */
export interface Role {
  /**
   * <p> The path to the role. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the
   *             <i>IAM User Guide</i>. </p>
   */
  Path: string | undefined;

  /**
   * <p>The friendly name that identifies the role.</p>
   */
  RoleName: string | undefined;

  /**
   * <p> The stable and unique string identifying the role. For more information about IDs, see
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
   *             Identifiers</a> in the <i>IAM User Guide</i>. </p>
   */
  RoleId: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) specifying the role. For more information about ARNs and
   *          how to use them in policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the
   *             <i>IAM User Guide</i> guide. </p>
   */
  Arn: string | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the role was created.</p>
   */
  CreateDate: Date | undefined;

  /**
   * <p>The policy that grants an entity permission to assume the role.</p>
   */
  AssumeRolePolicyDocument?: string;

  /**
   * <p>A description of the role that you provide.</p>
   */
  Description?: string;

  /**
   * <p>The maximum session duration (in seconds) for the specified role. Anyone who uses the
   *          AWS CLI, or API to assume the role can specify the duration using the optional
   *             <code>DurationSeconds</code> API parameter or <code>duration-seconds</code> CLI
   *          parameter.</p>
   */
  MaxSessionDuration?: number;

  /**
   * <p>The ARN of the policy used to set the permissions boundary for the role.</p>
   *          <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions Boundaries for IAM
   *             Identities </a> in the <i>IAM User Guide</i>.</p>
   */
  PermissionsBoundary?: AttachedPermissionsBoundary;

  /**
   * <p>A list of tags that are attached to the specified role. For more information about
   *       tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM
   *         Identities</a> in the <i>IAM User Guide</i>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Contains information about the last time that an IAM role was used. This includes the
   *          date and time and the Region in which the role was last used. Activity is only reported for
   *          the trailing 400 days. This period can be shorter if your Region began supporting these
   *          features within the last year. The role might have been used more than 400 days ago. For
   *          more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#access-advisor_tracking-period">Regions Where Data Is Tracked</a> in the <i>IAM User
   *          Guide</i>.</p>
   */
  RoleLastUsed?: RoleLastUsed;
}

export namespace Role {
  export const filterSensitiveLog = (obj: Role): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about an instance profile.</p>
 *          <p>This data type is used as a response element in the following operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateInstanceProfile</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetInstanceProfile</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListInstanceProfiles</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListInstanceProfilesForRole</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface InstanceProfile {
  /**
   * <p> The path to the instance profile. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
   *             Identifiers</a> in the <i>IAM User Guide</i>. </p>
   */
  Path: string | undefined;

  /**
   * <p>The name identifying the instance profile.</p>
   */
  InstanceProfileName: string | undefined;

  /**
   * <p> The stable and unique string identifying the instance profile. For more information
   *          about IDs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the <i>IAM User Guide</i>. </p>
   */
  InstanceProfileId: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) specifying the instance profile. For more information
   *          about ARNs and how to use them in policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the
   *             <i>IAM User Guide</i>. </p>
   */
  Arn: string | undefined;

  /**
   * <p>The date when the instance profile was created.</p>
   */
  CreateDate: Date | undefined;

  /**
   * <p>The role associated with the instance profile.</p>
   */
  Roles: Role[] | undefined;
}

export namespace InstanceProfile {
  export const filterSensitiveLog = (obj: InstanceProfile): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>CreateInstanceProfile</a> request.
 *     </p>
 */
export interface CreateInstanceProfileResponse {
  /**
   * <p>A structure containing details about the new instance profile.</p>
   */
  InstanceProfile: InstanceProfile | undefined;
}

export namespace CreateInstanceProfileResponse {
  export const filterSensitiveLog = (obj: CreateInstanceProfileResponse): any => ({
    ...obj,
  });
}

export interface CreateLoginProfileRequest {
  /**
   * <p>The name of the IAM user to create a password for. The user must already exist.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;

  /**
   * <p>The new password for the user.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     that is used to validate this parameter is a string of characters. That string can include almost any printable
   *     ASCII character from the space (<code>\u0020</code>) through the end of the ASCII character range (<code>\u00FF</code>).
   *     You can also include the tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and carriage return (<code>\u000D</code>)
   *     characters. Any of these characters are valid in a password. However, many tools, such
   *     as the AWS Management Console, might restrict the ability to type certain characters because they have
   *     special meaning within that tool.</p>
   */
  Password: string | undefined;

  /**
   * <p>Specifies whether the user is required to set a new password on next sign-in.</p>
   */
  PasswordResetRequired?: boolean;
}

export namespace CreateLoginProfileRequest {
  export const filterSensitiveLog = (obj: CreateLoginProfileRequest): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING }),
  });
}

/**
 * <p>Contains the user name and password create date for a user.</p>
 *          <p> This data type is used as a response element in the <a>CreateLoginProfile</a> and <a>GetLoginProfile</a> operations. </p>
 */
export interface LoginProfile {
  /**
   * <p>The name of the user, which can be used for signing in to the AWS Management
   *          Console.</p>
   */
  UserName: string | undefined;

  /**
   * <p>The date when the password for the user was created.</p>
   */
  CreateDate: Date | undefined;

  /**
   * <p>Specifies whether the user is required to set a new password on next sign-in.</p>
   */
  PasswordResetRequired?: boolean;
}

export namespace LoginProfile {
  export const filterSensitiveLog = (obj: LoginProfile): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>CreateLoginProfile</a> request.
 *     </p>
 */
export interface CreateLoginProfileResponse {
  /**
   * <p>A structure containing the user name and password create date.</p>
   */
  LoginProfile: LoginProfile | undefined;
}

export namespace CreateLoginProfileResponse {
  export const filterSensitiveLog = (obj: CreateLoginProfileResponse): any => ({
    ...obj,
  });
}

export interface CreateOpenIDConnectProviderRequest {
  /**
   * <p>The URL of the identity provider. The URL must begin with <code>https://</code> and
   *          should correspond to the <code>iss</code> claim in the provider's OpenID Connect ID tokens.
   *          Per the OIDC standard, path components are allowed but query parameters are not. Typically
   *          the URL consists of only a hostname, like <code>https://server.example.org</code> or
   *             <code>https://example.com</code>.</p>
   *          <p>You cannot register the same provider multiple times in a single AWS account. If you
   *          try to submit a URL that has already been used for an OpenID Connect provider in the AWS
   *          account, you will get an error.</p>
   */
  Url: string | undefined;

  /**
   * <p>A list of client IDs (also known as audiences). When a mobile or web app registers with
   *          an OpenID Connect provider, they establish a value that identifies the application. (This
   *          is the value that's sent as the <code>client_id</code> parameter on OAuth requests.)</p>
   *          <p>You can register multiple client IDs with the same provider. For example, you might have
   *          multiple applications that use the same OIDC provider. You cannot register more than 100
   *          client IDs with a single IAM OIDC provider.</p>
   *          <p>There is no defined format for a client ID. The
   *             <code>CreateOpenIDConnectProviderRequest</code> operation accepts client IDs up to 255
   *          characters long.</p>
   */
  ClientIDList?: string[];

  /**
   * <p>A list of server certificate thumbprints for the OpenID Connect (OIDC) identity
   *          provider's server certificates. Typically this list includes only one entry. However, IAM
   *          lets you have up to five thumbprints for an OIDC provider. This lets you maintain multiple
   *          thumbprints if the identity provider is rotating certificates.</p>
   *          <p>The server certificate thumbprint is the hex-encoded SHA-1 hash value of the X.509
   *          certificate used by the domain where the OpenID Connect provider makes its keys available.
   *          It is always a 40-character string.</p>
   *          <p>You must provide at least one thumbprint when creating an IAM OIDC provider. For
   *          example, assume that the OIDC provider is <code>server.example.com</code> and the provider
   *          stores its keys at https://keys.server.example.com/openid-connect. In that case, the
   *          thumbprint string would be the hex-encoded SHA-1 hash value of the certificate used by
   *          https://keys.server.example.com.</p>
   *          <p>For more information about obtaining the OIDC provider's thumbprint, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/identity-providers-oidc-obtain-thumbprint.html">Obtaining the Thumbprint for an OpenID Connect Provider</a> in the <i>IAM
   *             User Guide</i>.</p>
   */
  ThumbprintList: string[] | undefined;
}

export namespace CreateOpenIDConnectProviderRequest {
  export const filterSensitiveLog = (obj: CreateOpenIDConnectProviderRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>CreateOpenIDConnectProvider</a>
 *       request. </p>
 */
export interface CreateOpenIDConnectProviderResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the new IAM OpenID Connect provider that is created.
   *          For more information, see <a>OpenIDConnectProviderListEntry</a>. </p>
   */
  OpenIDConnectProviderArn?: string;
}

export namespace CreateOpenIDConnectProviderResponse {
  export const filterSensitiveLog = (obj: CreateOpenIDConnectProviderResponse): any => ({
    ...obj,
  });
}

export interface CreatePolicyRequest {
  /**
   * <p>The friendly name of the policy.</p>
   *          <p>IAM user, group, role, and policy names must be unique within the account. Names are
   *          not distinguished by case. For example, you cannot create resources named both "MyResource"
   *          and "myresource".</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>The path for the policy.</p>
   *          <p>For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the
   *             <i>IAM User Guide</i>.</p>
   *          <p>This parameter is optional. If it is not included, it defaults to a slash (/).</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  Path?: string;

  /**
   * <p>The JSON policy document that you want to use as the content for the new policy.</p>
   *          <p>You must provide policies in JSON format in IAM. However, for AWS CloudFormation
   *          templates formatted in YAML, you can provide the policy in JSON or YAML format. AWS
   *          CloudFormation always converts a YAML policy to JSON format before submitting it to
   *          IAM.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   */
  PolicyDocument: string | undefined;

  /**
   * <p>A friendly description of the policy.</p>
   *          <p>Typically used to store information about the permissions defined in the policy. For
   *          example, "Grants access to production DynamoDB tables."</p>
   *          <p>The policy description is immutable. After a value is assigned, it cannot be
   *          changed.</p>
   */
  Description?: string;
}

export namespace CreatePolicyRequest {
  export const filterSensitiveLog = (obj: CreatePolicyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a managed policy.</p>
 *          <p>This data type is used as a response element in the <a>CreatePolicy</a>,
 *             <a>GetPolicy</a>, and <a>ListPolicies</a> operations. </p>
 *          <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline
 *             Policies</a> in the <i>IAM User Guide</i>. </p>
 */
export interface Policy {
  /**
   * <p>The friendly name (not ARN) identifying the policy.</p>
   */
  PolicyName?: string;

  /**
   * <p>The stable and unique string identifying the policy.</p>
   *          <p>For more information about IDs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the
   *             <i>IAM User Guide</i>.</p>
   */
  PolicyId?: string;

  /**
   * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p>
   *          <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS
   *             Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
   */
  Arn?: string;

  /**
   * <p>The policy document.</p>
   */
  PolicyDocument?: string;

  /**
   * <p>The path to the policy.</p>
   *          <p>For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the
   *             <i>IAM User Guide</i>.</p>
   */
  Path?: string;

  /**
   * <p>The identifier for the version of the policy that is set as the default version.</p>
   */
  DefaultVersionId?: string;

  /**
   * <p>The number of entities (users, groups, and roles) that the policy is attached to.</p>
   */
  AttachmentCount?: number;

  /**
   * <p>The number of entities (users and roles) for which the policy is used to set the
   *          permissions boundary. </p>
   *          <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions Boundaries for IAM
   *             Identities </a> in the <i>IAM User Guide</i>.</p>
   */
  PermissionsBoundaryUsageCount?: number;

  /**
   * <p>Specifies whether the policy can be attached to an IAM user, group, or role.</p>
   */
  IsAttachable?: boolean;

  /**
   * <p>A friendly description of the policy.</p>
   *          <p>This element is included in the response to the <a>GetPolicy</a> operation.
   *          It is not included in the response to the <a>ListPolicies</a> operation. </p>
   */
  Description?: string;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the policy was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the policy was last updated.</p>
   *          <p>When a policy has only one version, this field contains the date and time when the
   *          policy was created. When a policy has more than one version, this field contains the date
   *          and time when the most recent policy version was created.</p>
   */
  UpdateDate?: Date;
}

export namespace Policy {
  export const filterSensitiveLog = (obj: Policy): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>CreatePolicy</a> request.
 *     </p>
 */
export interface CreatePolicyResponse {
  /**
   * <p>A structure containing details about the new policy.</p>
   */
  Policy?: Policy;
}

export namespace CreatePolicyResponse {
  export const filterSensitiveLog = (obj: CreatePolicyResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because the policy document was malformed. The error message
 *       describes the specific error.</p>
 */
export interface MalformedPolicyDocumentException extends __SmithyException, $MetadataBearer {
  name: "MalformedPolicyDocumentException";
  $fault: "client";
  message?: string;
}

export namespace MalformedPolicyDocumentException {
  export const filterSensitiveLog = (obj: MalformedPolicyDocumentException): any => ({
    ...obj,
  });
}

export interface CreatePolicyVersionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM policy to which you want to add a new
   *          version.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  PolicyArn: string | undefined;

  /**
   * <p>The JSON policy document that you want to use as the content for this new version of the
   *          policy.</p>
   *          <p>You must provide policies in JSON format in IAM. However, for AWS CloudFormation
   *          templates formatted in YAML, you can provide the policy in JSON or YAML format. AWS
   *          CloudFormation always converts a YAML policy to JSON format before submitting it to
   *          IAM.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   */
  PolicyDocument: string | undefined;

  /**
   * <p>Specifies whether to set this version as the policy's default version.</p>
   *          <p>When this parameter is <code>true</code>, the new policy version becomes the operative
   *          version. That is, it becomes the version that is in effect for the IAM users, groups, and
   *          roles that the policy is attached to.</p>
   *          <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for Managed
   *             Policies</a> in the <i>IAM User Guide</i>.</p>
   */
  SetAsDefault?: boolean;
}

export namespace CreatePolicyVersionRequest {
  export const filterSensitiveLog = (obj: CreatePolicyVersionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a version of a managed policy.</p>
 *          <p>This data type is used as a response element in the <a>CreatePolicyVersion</a>, <a>GetPolicyVersion</a>, <a>ListPolicyVersions</a>, and <a>GetAccountAuthorizationDetails</a> operations. </p>
 *          <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline
 *             Policies</a> in the <i>IAM User Guide</i>. </p>
 */
export interface PolicyVersion {
  /**
   * <p>The policy document.</p>
   *          <p>The policy document is returned in the response to the <a>GetPolicyVersion</a> and <a>GetAccountAuthorizationDetails</a> operations. It is not returned in
   *          the response to the <a>CreatePolicyVersion</a> or <a>ListPolicyVersions</a> operations. </p>
   *          <p>The policy document returned in this structure is URL-encoded compliant with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL decoding
   *          method to convert the policy back to plain JSON text. For example, if you use Java, you can
   *          use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in
   *          the Java SDK. Other languages and SDKs provide similar functionality.</p>
   */
  Document?: string;

  /**
   * <p>The identifier for the policy version.</p>
   *          <p>Policy version identifiers always begin with <code>v</code> (always lowercase). When a
   *          policy is created, the first policy version is <code>v1</code>. </p>
   */
  VersionId?: string;

  /**
   * <p>Specifies whether the policy version is set as the policy's default version.</p>
   */
  IsDefaultVersion?: boolean;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the policy version was created.</p>
   */
  CreateDate?: Date;
}

export namespace PolicyVersion {
  export const filterSensitiveLog = (obj: PolicyVersion): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>CreatePolicyVersion</a> request.
 *     </p>
 */
export interface CreatePolicyVersionResponse {
  /**
   * <p>A structure containing details about the new policy version.</p>
   */
  PolicyVersion?: PolicyVersion;
}

export namespace CreatePolicyVersionResponse {
  export const filterSensitiveLog = (obj: CreatePolicyVersionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because multiple requests to change this object were submitted simultaneously. Wait a few minutes and submit your request again.</p>
 */
export interface ConcurrentModificationException extends __SmithyException, $MetadataBearer {
  name: "ConcurrentModificationException";
  $fault: "client";
  message?: string;
}

export namespace ConcurrentModificationException {
  export const filterSensitiveLog = (obj: ConcurrentModificationException): any => ({
    ...obj,
  });
}

export interface CreateRoleRequest {
  /**
   * <p> The path to the role. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the
   *             <i>IAM User Guide</i>.</p>
   *          <p>This parameter is optional. If it is not included, it defaults to a slash (/).</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  Path?: string;

  /**
   * <p>The name of the role to create.</p>
   *          <p>IAM user, group, role, and policy names must be unique within the account. Names are
   *          not distinguished by case. For example, you cannot create resources named both "MyResource"
   *          and "myresource".</p>
   */
  RoleName: string | undefined;

  /**
   * <p>The trust relationship policy document that grants an entity permission to assume the
   *          role.</p>
   *
   *          <p>In IAM, you must provide a JSON policy that has been converted to a string. However,
   *          for AWS CloudFormation templates formatted in YAML, you can provide the policy in JSON or
   *          YAML format. AWS CloudFormation always converts a YAML policy to JSON format before
   *          submitting it to IAM.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   *          <p> Upon success, the response includes
   *          the same trust policy in JSON format.</p>
   */
  AssumeRolePolicyDocument: string | undefined;

  /**
   * <p>A description of the role.</p>
   */
  Description?: string;

  /**
   * <p>The maximum session duration (in seconds) that you want to set for the specified role.
   *          If you do not specify a value for this setting, the default maximum of one hour is applied.
   *          This setting can have a value from 1 hour to 12 hours.</p>
   *          <p>Anyone who assumes the role from the AWS CLI or API can use the
   *             <code>DurationSeconds</code> API parameter or the <code>duration-seconds</code> CLI
   *          parameter to request a longer session. The <code>MaxSessionDuration</code> setting
   *          determines the maximum duration that can be requested using the
   *             <code>DurationSeconds</code> parameter. If users don't specify a value for the
   *             <code>DurationSeconds</code> parameter, their security credentials are valid for one
   *          hour by default. This applies when you use the <code>AssumeRole*</code> API operations or
   *          the <code>assume-role*</code> CLI operations but does not apply when you use those
   *          operations to create a console URL. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html">Using IAM Roles</a> in the
   *             <i>IAM User Guide</i>.</p>
   */
  MaxSessionDuration?: number;

  /**
   * <p>The ARN of the policy that is used to set the permissions boundary for the role.</p>
   */
  PermissionsBoundary?: string;

  /**
   * <p>A list of tags that you want to attach to the newly created role. Each tag consists of
   *       a key name and an associated value. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM Identities</a> in the
   *         <i>IAM User Guide</i>.</p>
   *          <note>
   *             <p>If any one of the tags is invalid or if you exceed the allowed number of tags per
   *         role, then the entire request fails and the role is not created.</p>
   *          </note>
   */
  Tags?: Tag[];
}

export namespace CreateRoleRequest {
  export const filterSensitiveLog = (obj: CreateRoleRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>CreateRole</a> request. </p>
 */
export interface CreateRoleResponse {
  /**
   * <p>A structure containing details about the new role.</p>
   */
  Role: Role | undefined;
}

export namespace CreateRoleResponse {
  export const filterSensitiveLog = (obj: CreateRoleResponse): any => ({
    ...obj,
  });
}

export interface CreateSAMLProviderRequest {
  /**
   * <p>An XML document generated by an identity provider (IdP) that supports SAML 2.0. The
   *          document includes the issuer's name, expiration information, and keys that can be used to
   *          validate the SAML authentication response (assertions) that are received from the IdP. You
   *          must generate the metadata document using the identity management software that is used as
   *          your organization's IdP.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html">About SAML 2.0-based
   *             Federation</a> in the <i>IAM User Guide</i>
   *          </p>
   */
  SAMLMetadataDocument: string | undefined;

  /**
   * <p>The name of the provider to create.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  Name: string | undefined;
}

export namespace CreateSAMLProviderRequest {
  export const filterSensitiveLog = (obj: CreateSAMLProviderRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>CreateSAMLProvider</a> request.
 *     </p>
 */
export interface CreateSAMLProviderResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the new SAML provider resource in IAM.</p>
   */
  SAMLProviderArn?: string;
}

export namespace CreateSAMLProviderResponse {
  export const filterSensitiveLog = (obj: CreateSAMLProviderResponse): any => ({
    ...obj,
  });
}

export interface CreateSelfdefineAccessKeyRequest {
  /**
   * <p>Account name.</p>
   */
  AccountName?: string;

  /**
   * <p>The custom ak of the account you want to create.</p>
   */
  SelfdefineAccessKeyId?: string;

  /**
   * <p>The custom sk of the account you want to create.</p>
   */
  SelfdefineSecretAccessKey?: string;
}

export namespace CreateSelfdefineAccessKeyRequest {
  export const filterSensitiveLog = (obj: CreateSelfdefineAccessKeyRequest): any => ({
    ...obj,
  });
}

export interface CreateServiceLinkedRoleRequest {
  /**
   * <p>The service principal for the AWS service to which this role is attached. You use a
   *          string similar to a URL but without the http:// in front. For example:
   *             <code>elasticbeanstalk.amazonaws.com</code>. </p>
   *          <p>Service principals are unique and case-sensitive. To find the exact service principal
   *          for your service-linked role, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-services-that-work-with-iam.html">AWS Services That
   *             Work with IAM</a> in the <i>IAM User Guide</i>. Look for the
   *          services that have <b>Yes </b>in the <b>Service-Linked Role</b> column. Choose the <b>Yes</b>
   *          link to view the service-linked role documentation for that service.</p>
   */
  AWSServiceName: string | undefined;

  /**
   * <p>The description of the role.</p>
   */
  Description?: string;

  /**
   * <p></p>
   *          <p>A string that you provide, which is combined with the service-provided prefix to form
   *          the complete role name. If you make multiple requests for the same service, then you must
   *          supply a different <code>CustomSuffix</code> for each request. Otherwise the request fails
   *          with a duplicate role name error. For example, you could add <code>-1</code> or
   *             <code>-debug</code> to the suffix.</p>
   *          <p>Some services do not support the <code>CustomSuffix</code> parameter. If you provide an
   *          optional suffix and the operation fails, try the operation again without the suffix.</p>
   */
  CustomSuffix?: string;
}

export namespace CreateServiceLinkedRoleRequest {
  export const filterSensitiveLog = (obj: CreateServiceLinkedRoleRequest): any => ({
    ...obj,
  });
}

export interface CreateServiceLinkedRoleResponse {
  /**
   * <p>A <a>Role</a> object that contains details about the newly created
   *          role.</p>
   */
  Role?: Role;
}

export namespace CreateServiceLinkedRoleResponse {
  export const filterSensitiveLog = (obj: CreateServiceLinkedRoleResponse): any => ({
    ...obj,
  });
}

export interface CreateServiceSpecificCredentialRequest {
  /**
   * <p>The name of the IAM user that is to be associated with the credentials. The new
   *          service-specific credentials have the same permissions as the associated user except that
   *          they can be used only to access the specified service.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;

  /**
   * <p>The name of the AWS service that is to be associated with the credentials. The service
   *          you specify here is the only service that can be accessed using these credentials.</p>
   */
  ServiceName: string | undefined;
}

export namespace CreateServiceSpecificCredentialRequest {
  export const filterSensitiveLog = (obj: CreateServiceSpecificCredentialRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the details of a service-specific credential.</p>
 */
export interface ServiceSpecificCredential {
  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the service-specific credential were created.</p>
   */
  CreateDate: Date | undefined;

  /**
   * <p>The name of the service associated with the service-specific credential.</p>
   */
  ServiceName: string | undefined;

  /**
   * <p>The generated user name for the service-specific credential. This value is generated by
   *          combining the IAM user's name combined with the ID number of the AWS account, as in
   *             <code>jane-at-123456789012</code>, for example. This value cannot be configured by the
   *          user.</p>
   */
  ServiceUserName: string | undefined;

  /**
   * <p>The generated password for the service-specific credential.</p>
   */
  ServicePassword: string | undefined;

  /**
   * <p>The unique identifier for the service-specific credential.</p>
   */
  ServiceSpecificCredentialId: string | undefined;

  /**
   * <p>The name of the IAM user associated with the service-specific credential.</p>
   */
  UserName: string | undefined;

  /**
   * <p>The status of the service-specific credential. <code>Active</code> means that the key is
   *          valid for API calls, while <code>Inactive</code> means it is not.</p>
   */
  Status: StatusType | string | undefined;
}

export namespace ServiceSpecificCredential {
  export const filterSensitiveLog = (obj: ServiceSpecificCredential): any => ({
    ...obj,
    ...(obj.ServicePassword && { ServicePassword: SENSITIVE_STRING }),
  });
}

export interface CreateServiceSpecificCredentialResponse {
  /**
   * <p>A structure that contains information about the newly created service-specific
   *          credential.</p>
   *          <important>
   *             <p>This is the only time that the password for this credential set is available. It
   *             cannot be recovered later. Instead, you must reset the password with <a>ResetServiceSpecificCredential</a>.</p>
   *          </important>
   */
  ServiceSpecificCredential?: ServiceSpecificCredential;
}

export namespace CreateServiceSpecificCredentialResponse {
  export const filterSensitiveLog = (obj: CreateServiceSpecificCredentialResponse): any => ({
    ...obj,
    ...(obj.ServiceSpecificCredential && {
      ServiceSpecificCredential: ServiceSpecificCredential.filterSensitiveLog(obj.ServiceSpecificCredential),
    }),
  });
}

/**
 * <p>The specified service does not support service-specific credentials.</p>
 */
export interface ServiceNotSupportedException extends __SmithyException, $MetadataBearer {
  name: "ServiceNotSupportedException";
  $fault: "client";
  message?: string;
}

export namespace ServiceNotSupportedException {
  export const filterSensitiveLog = (obj: ServiceNotSupportedException): any => ({
    ...obj,
  });
}

export interface CreateUserRequest {
  /**
   * <p> The path for the user name. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
   *             Identifiers</a> in the <i>IAM User Guide</i>.</p>
   *          <p>This parameter is optional. If it is not included, it defaults to a slash (/).</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  Path?: string;

  /**
   * <p>The name of the user to create.</p>
   *          <p>IAM user, group, role, and policy names must be unique within the account. Names are
   *          not distinguished by case. For example, you cannot create resources named both "MyResource"
   *          and "myresource".</p>
   */
  UserName: string | undefined;

  /**
   * <p>The ARN of the policy that is used to set the permissions boundary for the user.</p>
   */
  PermissionsBoundary?: string;

  /**
   * <p>A list of tags that you want to attach to the newly created user. Each tag consists of
   *       a key name and an associated value. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM Identities</a> in the
   *         <i>IAM User Guide</i>.</p>
   *          <note>
   *             <p>If any one of the tags is invalid or if you exceed the allowed number of tags per
   *         user, then the entire request fails and the user is not created.</p>
   *          </note>
   */
  Tags?: Tag[];

  Type?: number;
  /**
   * <p>User email.</p>
   */
  Email?: string;

  /**
   * <p>Password</p>
   */
  Password?: string;

  /**
   * <p>Access type, 1 means web, 2 means api, 3 means all.</p>
   */
  AccessType?: number;

  /**
   * <p>Description</p>
   */
  Description?: string;

  /**
   * <p>First login is update password, 0 means no, 1 means yes.</p>
   */
  FirstLoginUpdatePassword?: number;

  /**
   * <p>A list of groups.</p>
   */
  Groups?: Group[];
}

export namespace CreateUserRequest {
  export const filterSensitiveLog = (obj: CreateUserRequest): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING }),
  });
}

/**
 * <p>Contains the response to a successful <a>CreateUser</a> request. </p>
 */
export interface CreateUserResponse {
  /**
   * <p>A structure with details about the new IAM user.</p>
   */
  User?: User;
}

export namespace CreateUserResponse {
  export const filterSensitiveLog = (obj: CreateUserResponse): any => ({
    ...obj,
  });
}

export interface CreateVirtualMFADeviceRequest {
  /**
   * <p> The path for the virtual MFA device. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
   *             Identifiers</a> in the <i>IAM User Guide</i>.</p>
   *          <p>This parameter is optional. If it is not included, it defaults to a slash (/).</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  Path?: string;

  /**
   * <p>The name of the virtual MFA device. Use with path to uniquely identify a virtual MFA
   *          device.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  VirtualMFADeviceName: string | undefined;
}

export namespace CreateVirtualMFADeviceRequest {
  export const filterSensitiveLog = (obj: CreateVirtualMFADeviceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a virtual MFA device.</p>
 */
export interface VirtualMFADevice {
  /**
   * <p>The serial number associated with <code>VirtualMFADevice</code>.</p>
   */
  SerialNumber: string | undefined;

  /**
   * <p> The base32 seed defined as specified in <a href="https://tools.ietf.org/html/rfc3548.txt">RFC3548</a>. The <code>Base32StringSeed</code> is base64-encoded. </p>
   */
  Base32StringSeed?: Uint8Array;

  /**
   * <p> A QR code PNG image that encodes
   *             <code>otpauth://totp/$virtualMFADeviceName@$AccountName?secret=$Base32String</code>
   *          where <code>$virtualMFADeviceName</code> is one of the create call arguments.
   *             <code>AccountName</code> is the user name if set (otherwise, the account ID otherwise),
   *          and <code>Base32String</code> is the seed in base32 format. The <code>Base32String</code>
   *          value is base64-encoded. </p>
   */
  QRCodePNG?: Uint8Array;

  /**
   * <p>The IAM user associated with this virtual MFA device.</p>
   */
  User?: User;

  /**
   * <p>The date and time on which the virtual MFA device was enabled.</p>
   */
  EnableDate?: Date;
}

export namespace VirtualMFADevice {
  export const filterSensitiveLog = (obj: VirtualMFADevice): any => ({
    ...obj,
    ...(obj.Base32StringSeed && { Base32StringSeed: SENSITIVE_STRING }),
    ...(obj.QRCodePNG && { QRCodePNG: SENSITIVE_STRING }),
  });
}

/**
 * <p>Contains the response to a successful <a>CreateVirtualMFADevice</a> request.
 *     </p>
 */
export interface CreateVirtualMFADeviceResponse {
  /**
   * <p>A structure containing details about the new virtual MFA device.</p>
   */
  VirtualMFADevice: VirtualMFADevice | undefined;
}

export namespace CreateVirtualMFADeviceResponse {
  export const filterSensitiveLog = (obj: CreateVirtualMFADeviceResponse): any => ({
    ...obj,
    ...(obj.VirtualMFADevice && { VirtualMFADevice: VirtualMFADevice.filterSensitiveLog(obj.VirtualMFADevice) }),
  });
}

export interface DeactivateMFADeviceRequest {
  /**
   * <p>The name of the user whose MFA device you want to deactivate.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;

  /**
   * <p>The serial number that uniquely identifies the MFA device. For virtual MFA devices, the
   *          serial number is the device ARN.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of upper and lowercase alphanumeric characters with no spaces. You can also include any of the
   *     following characters: =,.@:/-</p>
   */
  SerialNumber: string | undefined;
}

export namespace DeactivateMFADeviceRequest {
  export const filterSensitiveLog = (obj: DeactivateMFADeviceRequest): any => ({
    ...obj,
  });
}

export interface DeleteAccessKeyRequest {
  /**
   * <p>The name of the user whose access key pair you want to delete.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName?: string;

  /**
   * <p>The access key ID for the access key ID and secret access key you want to delete.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can
   *     consist of any upper or lowercased letter or digit.</p>
   */
  AccessKeyId: string | undefined;
}

export namespace DeleteAccessKeyRequest {
  export const filterSensitiveLog = (obj: DeleteAccessKeyRequest): any => ({
    ...obj,
  });
}

export interface DeleteAccountRequest {
  /**
   * <p>The name of the account to delete.</p>
   */
  AccountName: string | undefined;
}

export namespace DeleteAccountRequest {
  export const filterSensitiveLog = (obj: DeleteAccountRequest): any => ({
    ...obj,
  });
}

export interface DeleteAccountAliasRequest {
  /**
   * <p>The name of the account alias to delete.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of
   *     lowercase letters, digits, and dashes. You cannot start or finish with a dash, nor can you have
   *     two dashes in a row.</p>
   */
  AccountAlias: string | undefined;
}

export namespace DeleteAccountAliasRequest {
  export const filterSensitiveLog = (obj: DeleteAccountAliasRequest): any => ({
    ...obj,
  });
}

export interface DeleteAccountGroupRequest {
  /**
   * <p>The name of the account group to delete.</p>
   */
  GroupName: string | undefined;
}

export namespace DeleteAccountGroupRequest {
  export const filterSensitiveLog = (obj: DeleteAccountGroupRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because it attempted to delete a resource that has attached
 *       subordinate entities. The error message describes these entities.</p>
 */
export interface DeleteConflictException extends __SmithyException, $MetadataBearer {
  name: "DeleteConflictException";
  $fault: "client";
  message?: string;
}

export namespace DeleteConflictException {
  export const filterSensitiveLog = (obj: DeleteConflictException): any => ({
    ...obj,
  });
}

export interface DeleteGroupRequest {
  /**
   * <p>The name of the IAM group to delete.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  GroupName: string | undefined;
}

export namespace DeleteGroupRequest {
  export const filterSensitiveLog = (obj: DeleteGroupRequest): any => ({
    ...obj,
  });
}

export interface DeleteGroupPolicyRequest {
  /**
   * <p>The name (friendly name, not ARN) identifying the group that the policy is embedded
   *          in.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The name identifying the policy document to delete.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  PolicyName: string | undefined;
}

export namespace DeleteGroupPolicyRequest {
  export const filterSensitiveLog = (obj: DeleteGroupPolicyRequest): any => ({
    ...obj,
  });
}

export interface DeleteInstanceProfileRequest {
  /**
   * <p>The name of the instance profile to delete.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  InstanceProfileName: string | undefined;
}

export namespace DeleteInstanceProfileRequest {
  export const filterSensitiveLog = (obj: DeleteInstanceProfileRequest): any => ({
    ...obj,
  });
}

export interface DeleteLoginProfileRequest {
  /**
   * <p>The name of the user whose password you want to delete.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;
}

export namespace DeleteLoginProfileRequest {
  export const filterSensitiveLog = (obj: DeleteLoginProfileRequest): any => ({
    ...obj,
  });
}

export interface DeleteOpenIDConnectProviderRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM OpenID Connect provider resource object to
   *          delete. You can get a list of OpenID Connect provider resource ARNs by using the <a>ListOpenIDConnectProviders</a> operation.</p>
   */
  OpenIDConnectProviderArn: string | undefined;
}

export namespace DeleteOpenIDConnectProviderRequest {
  export const filterSensitiveLog = (obj: DeleteOpenIDConnectProviderRequest): any => ({
    ...obj,
  });
}

export interface DeletePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM policy you want to delete.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  PolicyArn: string | undefined;
}

export namespace DeletePolicyRequest {
  export const filterSensitiveLog = (obj: DeletePolicyRequest): any => ({
    ...obj,
  });
}

export interface DeletePolicyVersionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM policy from which you want to delete a
   *          version.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  PolicyArn: string | undefined;

  /**
   * <p>The policy version to delete.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that
   *     consists of the lowercase letter 'v' followed by one or two digits, and optionally
   *     followed by a period '.' and a string of letters and digits.</p>
   *          <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for Managed
   *             Policies</a> in the <i>IAM User Guide</i>.</p>
   */
  VersionId: string | undefined;
}

export namespace DeletePolicyVersionRequest {
  export const filterSensitiveLog = (obj: DeletePolicyVersionRequest): any => ({
    ...obj,
  });
}

export interface DeleteRoleRequest {
  /**
   * <p>The name of the role to delete.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  RoleName: string | undefined;
}

export namespace DeleteRoleRequest {
  export const filterSensitiveLog = (obj: DeleteRoleRequest): any => ({
    ...obj,
  });
}

export interface DeleteRolePermissionsBoundaryRequest {
  /**
   * <p>The name (friendly name, not ARN) of the IAM role from which you want to remove the
   *          permissions boundary.</p>
   */
  RoleName: string | undefined;
}

export namespace DeleteRolePermissionsBoundaryRequest {
  export const filterSensitiveLog = (obj: DeleteRolePermissionsBoundaryRequest): any => ({
    ...obj,
  });
}

export interface DeleteRolePolicyRequest {
  /**
   * <p>The name (friendly name, not ARN) identifying the role that the policy is embedded
   *          in.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  RoleName: string | undefined;

  /**
   * <p>The name of the inline policy to delete from the specified IAM role.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  PolicyName: string | undefined;
}

export namespace DeleteRolePolicyRequest {
  export const filterSensitiveLog = (obj: DeleteRolePolicyRequest): any => ({
    ...obj,
  });
}

export interface DeleteSAMLProviderRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the SAML provider to delete.</p>
   */
  SAMLProviderArn: string | undefined;
}

export namespace DeleteSAMLProviderRequest {
  export const filterSensitiveLog = (obj: DeleteSAMLProviderRequest): any => ({
    ...obj,
  });
}

export interface DeleteServerCertificateRequest {
  /**
   * <p>The name of the server certificate you want to delete.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  ServerCertificateName: string | undefined;
}

export namespace DeleteServerCertificateRequest {
  export const filterSensitiveLog = (obj: DeleteServerCertificateRequest): any => ({
    ...obj,
  });
}

export interface DeleteServiceLinkedRoleRequest {
  /**
   * <p>The name of the service-linked role to be deleted.</p>
   */
  RoleName: string | undefined;
}

export namespace DeleteServiceLinkedRoleRequest {
  export const filterSensitiveLog = (obj: DeleteServiceLinkedRoleRequest): any => ({
    ...obj,
  });
}

export interface DeleteServiceLinkedRoleResponse {
  /**
   * <p>The deletion task identifier that you can use to check the status of the deletion. This
   *          identifier is returned in the format
   *             <code>task/aws-service-role/<service-principal-name>/<role-name>/<task-uuid></code>.</p>
   */
  DeletionTaskId: string | undefined;
}

export namespace DeleteServiceLinkedRoleResponse {
  export const filterSensitiveLog = (obj: DeleteServiceLinkedRoleResponse): any => ({
    ...obj,
  });
}

export interface DeleteServiceSpecificCredentialRequest {
  /**
   * <p>The name of the IAM user associated with the service-specific credential. If this
   *          value is not specified, then the operation assumes the user whose credentials are used to
   *          call the operation.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName?: string;

  /**
   * <p>The unique identifier of the service-specific credential. You can get this value by
   *          calling <a>ListServiceSpecificCredentials</a>.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can
   *     consist of any upper or lowercased letter or digit.</p>
   */
  ServiceSpecificCredentialId: string | undefined;
}

export namespace DeleteServiceSpecificCredentialRequest {
  export const filterSensitiveLog = (obj: DeleteServiceSpecificCredentialRequest): any => ({
    ...obj,
  });
}

export interface DeleteSigningCertificateRequest {
  /**
   * <p>The name of the user the signing certificate belongs to.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName?: string;

  /**
   * <p>The ID of the signing certificate to delete.</p>
   *          <p>The format of this parameter, as described by its <a href="http://wikipedia.org/wiki/regex">regex</a> pattern, is a string of characters
   *          that can be upper- or lower-cased letters or digits.</p>
   */
  CertificateId: string | undefined;
}

export namespace DeleteSigningCertificateRequest {
  export const filterSensitiveLog = (obj: DeleteSigningCertificateRequest): any => ({
    ...obj,
  });
}

export interface DeleteSSHPublicKeyRequest {
  /**
   * <p>The name of the IAM user associated with the SSH public key.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;

  /**
   * <p>The unique identifier for the SSH public key.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can
   *     consist of any upper or lowercased letter or digit.</p>
   */
  SSHPublicKeyId: string | undefined;
}

export namespace DeleteSSHPublicKeyRequest {
  export const filterSensitiveLog = (obj: DeleteSSHPublicKeyRequest): any => ({
    ...obj,
  });
}

export interface DeleteUserRequest {
  /**
   * <p>The name of the user to delete.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;
}

export namespace DeleteUserRequest {
  export const filterSensitiveLog = (obj: DeleteUserRequest): any => ({
    ...obj,
  });
}

export interface DeleteUserPermissionsBoundaryRequest {
  /**
   * <p>The name (friendly name, not ARN) of the IAM user from which you want to remove the
   *          permissions boundary.</p>
   */
  UserName: string | undefined;
}

export namespace DeleteUserPermissionsBoundaryRequest {
  export const filterSensitiveLog = (obj: DeleteUserPermissionsBoundaryRequest): any => ({
    ...obj,
  });
}

export interface DeleteUserPolicyRequest {
  /**
   * <p>The name (friendly name, not ARN) identifying the user that the policy is embedded
   *          in.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;

  /**
   * <p>The name identifying the policy document to delete.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  PolicyName: string | undefined;
}

export namespace DeleteUserPolicyRequest {
  export const filterSensitiveLog = (obj: DeleteUserPolicyRequest): any => ({
    ...obj,
  });
}

export interface DeleteVirtualMFADeviceRequest {
  /**
   * <p>The serial number that uniquely identifies the MFA device. For virtual MFA devices, the
   *          serial number is the same as the ARN.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of upper and lowercase alphanumeric characters with no spaces. You can also include any of the
   *     following characters: =,.@:/-</p>
   */
  SerialNumber: string | undefined;
}

export namespace DeleteVirtualMFADeviceRequest {
  export const filterSensitiveLog = (obj: DeleteVirtualMFADeviceRequest): any => ({
    ...obj,
  });
}

export interface DetachGroupPolicyRequest {
  /**
   * <p>The name (friendly name, not ARN) of the IAM group to detach the policy from.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM policy you want to detach.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  PolicyArn: string | undefined;
}

export namespace DetachGroupPolicyRequest {
  export const filterSensitiveLog = (obj: DetachGroupPolicyRequest): any => ({
    ...obj,
  });
}

export interface DetachRolePolicyRequest {
  /**
   * <p>The name (friendly name, not ARN) of the IAM role to detach the policy from.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  RoleName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM policy you want to detach.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  PolicyArn: string | undefined;
}

export namespace DetachRolePolicyRequest {
  export const filterSensitiveLog = (obj: DetachRolePolicyRequest): any => ({
    ...obj,
  });
}

export interface DetachUserPolicyRequest {
  /**
   * <p>The name (friendly name, not ARN) of the IAM user to detach the policy from.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM policy you want to detach.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  PolicyArn: string | undefined;
}

export namespace DetachUserPolicyRequest {
  export const filterSensitiveLog = (obj: DetachUserPolicyRequest): any => ({
    ...obj,
  });
}

export interface EnableMFADeviceRequest {
  /**
   * <p>The name of the IAM user for whom you want to enable the MFA device.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;

  /**
   * <p>The serial number that uniquely identifies the MFA device. For virtual MFA devices, the
   *          serial number is the device ARN.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of upper and lowercase alphanumeric characters with no spaces. You can also include any of the
   *     following characters: =,.@:/-</p>
   */
  SerialNumber: string | undefined;

  /**
   * <p>An authentication code emitted by the device. </p>
   *          <p>The format for this parameter is a string of six digits.</p>
   *          <important>
   *             <p>Submit your request immediately after generating the authentication codes. If you
   *             generate the codes and then wait too long to submit the request, the MFA device
   *             successfully associates with the user but the MFA device becomes out of sync. This
   *             happens because time-based one-time passwords (TOTP) expire after a short period of
   *             time. If this happens, you can <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa_sync.html">resync the device</a>.</p>
   *          </important>
   */
  AuthenticationCode1: string | undefined;

  /**
   * <p>A subsequent authentication code emitted by the device.</p>
   *          <p>The format for this parameter is a string of six digits.</p>
   *          <important>
   *             <p>Submit your request immediately after generating the authentication codes. If you
   *             generate the codes and then wait too long to submit the request, the MFA device
   *             successfully associates with the user but the MFA device becomes out of sync. This
   *             happens because time-based one-time passwords (TOTP) expire after a short period of
   *             time. If this happens, you can <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_mfa_sync.html">resync the device</a>.</p>
   *          </important>
   */
  AuthenticationCode2: string | undefined;
}

export namespace EnableMFADeviceRequest {
  export const filterSensitiveLog = (obj: EnableMFADeviceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because the authentication code was not recognized. The error
 *       message describes the specific error.</p>
 */
export interface InvalidAuthenticationCodeException extends __SmithyException, $MetadataBearer {
  name: "InvalidAuthenticationCodeException";
  $fault: "client";
  message?: string;
}

export namespace InvalidAuthenticationCodeException {
  export const filterSensitiveLog = (obj: InvalidAuthenticationCodeException): any => ({
    ...obj,
  });
}

export enum ReportStateType {
  COMPLETE = "COMPLETE",
  INPROGRESS = "INPROGRESS",
  STARTED = "STARTED",
}

/**
 * <p>Contains the response to a successful <a>GenerateCredentialReport</a>
 *       request. </p>
 */
export interface GenerateCredentialReportResponse {
  /**
   * <p>Information about the state of the credential report.</p>
   */
  State?: ReportStateType | string;

  /**
   * <p>Information about the credential report.</p>
   */
  Description?: string;
}

export namespace GenerateCredentialReportResponse {
  export const filterSensitiveLog = (obj: GenerateCredentialReportResponse): any => ({
    ...obj,
  });
}

export interface GenerateOrganizationsAccessReportRequest {
  /**
   * <p>The path of the AWS Organizations entity (root, OU, or account). You can build an entity path using
   *          the known structure of your organization. For example, assume that your account ID is
   *             <code>123456789012</code> and its parent OU ID is <code>ou-rge0-awsabcde</code>. The
   *          organization root ID is <code>r-f6g7h8i9j0example</code> and your organization ID is
   *             <code>o-a1b2c3d4e5</code>. Your entity path is
   *             <code>o-a1b2c3d4e5/r-f6g7h8i9j0example/ou-rge0-awsabcde/123456789012</code>.</p>
   */
  EntityPath: string | undefined;

  /**
   * <p>The identifier of the AWS Organizations service control policy (SCP). This parameter is
   *          optional.</p>
   *          <p>This ID is used to generate information about when an account principal that is limited
   *          by the SCP attempted to access an AWS service.</p>
   */
  OrganizationsPolicyId?: string;
}

export namespace GenerateOrganizationsAccessReportRequest {
  export const filterSensitiveLog = (obj: GenerateOrganizationsAccessReportRequest): any => ({
    ...obj,
  });
}

export interface GenerateOrganizationsAccessReportResponse {
  /**
   * <p>The job identifier that you can use in the <a>GetOrganizationsAccessReport</a> operation.</p>
   */
  JobId?: string;
}

export namespace GenerateOrganizationsAccessReportResponse {
  export const filterSensitiveLog = (obj: GenerateOrganizationsAccessReportResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request failed because the maximum number of concurrent requests for this
 *     account are already running.</p>
 */
export interface ReportGenerationLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "ReportGenerationLimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace ReportGenerationLimitExceededException {
  export const filterSensitiveLog = (obj: ReportGenerationLimitExceededException): any => ({
    ...obj,
  });
}

export interface GenerateServiceLastAccessedDetailsRequest {
  /**
   * <p>The ARN of the IAM resource (user, group, role, or managed policy) used to generate
   *          information about when the resource was last used in an attempt to access an AWS
   *          service.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The level of detail that you want to generate. You can specify whether you want to
   *          generate information about the last attempt to access services or actions. If you specify
   *          service-level granularity, this operation generates only service data. If you specify
   *          action-level granularity, it generates service and action data. If you don't include this
   *          optional parameter, the operation generates service data.</p>
   */
  Granularity?: AccessAdvisorUsageGranularityType | string;
}

export namespace GenerateServiceLastAccessedDetailsRequest {
  export const filterSensitiveLog = (obj: GenerateServiceLastAccessedDetailsRequest): any => ({
    ...obj,
  });
}

export interface GenerateServiceLastAccessedDetailsResponse {
  /**
   * <p>The <code>JobId</code> that you can use in the <a>GetServiceLastAccessedDetails</a> or <a>GetServiceLastAccessedDetailsWithEntities</a> operations. The <code>JobId</code>
   *          returned by <code>GenerateServiceLastAccessedDetail</code> must be used by the same role
   *          within a session, or by the same user when used to call
   *             <code>GetServiceLastAccessedDetail</code>.</p>
   */
  JobId?: string;
}

export namespace GenerateServiceLastAccessedDetailsResponse {
  export const filterSensitiveLog = (obj: GenerateServiceLastAccessedDetailsResponse): any => ({
    ...obj,
  });
}

export interface GetAccessKeyLastUsedRequest {
  /**
   * <p>The identifier of an access key.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can
   *     consist of any upper or lowercased letter or digit.</p>
   */
  AccessKeyId: string | undefined;
}

export namespace GetAccessKeyLastUsedRequest {
  export const filterSensitiveLog = (obj: GetAccessKeyLastUsedRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>GetAccessKeyLastUsed</a> request.
 *       It is also returned as a member of the <a>AccessKeyMetaData</a> structure returned
 *       by the <a>ListAccessKeys</a> action.</p>
 */
export interface GetAccessKeyLastUsedResponse {
  /**
   * <p>The name of the AWS IAM user that owns this access key.</p>
   *          <p></p>
   */
  UserName?: string;

  /**
   * <p>Contains information about the last time the access key was used.</p>
   */
  AccessKeyLastUsed?: AccessKeyLastUsed;
}

export namespace GetAccessKeyLastUsedResponse {
  export const filterSensitiveLog = (obj: GetAccessKeyLastUsedResponse): any => ({
    ...obj,
  });
}

export interface GetAccountRequest {
  /**
   * <p>Account name.</p>
   */
  AccountName?: string;
}

export namespace GetAccountRequest {
  export const filterSensitiveLog = (obj: GetAccountRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>GetAccountAuthorizationDetails</a>
 *       request. </p>
 */
export interface GetAccountResponse {
  /**
   * <p>A list containing information about IAM users.</p>
   */
  Account?: AccountType;
}

export namespace GetAccountResponse {
  export const filterSensitiveLog = (obj: GetAccountResponse): any => ({
    ...obj,
    ...(obj.Account && { Account: AccountType.filterSensitiveLog(obj.Account) }),
  });
}

export enum EntityType {
  AWSManagedPolicy = "AWSManagedPolicy",
  Group = "Group",
  LocalManagedPolicy = "LocalManagedPolicy",
  Role = "Role",
  User = "User",
}

export interface GetAccountAuthorizationDetailsRequest {
  /**
   * <p>A list of entity types used to filter the results. Only the entities that match the
   *          types you specify are included in the output. Use the value <code>LocalManagedPolicy</code>
   *          to include customer managed policies.</p>
   *          <p>The format for this parameter is a comma-separated (if more than one) list of strings.
   *          Each string value in the list must be one of the valid values listed below.</p>
   */
  Filter?: (EntityType | string)[];

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;
}

export namespace GetAccountAuthorizationDetailsRequest {
  export const filterSensitiveLog = (obj: GetAccountAuthorizationDetailsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about an IAM policy, including the policy document.</p>
 *          <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p>
 */
export interface PolicyDetail {
  /**
   * <p>The name of the policy.</p>
   */
  PolicyName?: string;

  /**
   * <p>The policy document.</p>
   */
  PolicyDocument?: string;
}

export namespace PolicyDetail {
  export const filterSensitiveLog = (obj: PolicyDetail): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about an IAM group, including all of the group's policies.</p>
 *          <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p>
 */
export interface GroupDetail {
  /**
   * <p>The path to the group. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the
   *             <i>IAM User Guide</i>.</p>
   */
  Path?: string;

  /**
   * <p>The friendly name that identifies the group.</p>
   */
  GroupName?: string;

  /**
   * <p>The stable and unique string identifying the group. For more information about IDs, see
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
   *             Identifiers</a> in the <i>IAM User Guide</i>.</p>
   */
  GroupId?: string;

  /**
   * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p>
   *          <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS
   *             Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
   */
  Arn?: string;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the group was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>A list of the inline policies embedded in the group.</p>
   */
  GroupPolicyList?: PolicyDetail[];

  /**
   * <p>A list of the managed policies attached to the group.</p>
   */
  AttachedManagedPolicies?: AttachedPolicy[];
}

export namespace GroupDetail {
  export const filterSensitiveLog = (obj: GroupDetail): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a managed policy, including the policy's ARN, versions, and
 *          the number of principal entities (users, groups, and roles) that the policy is attached
 *          to.</p>
 *          <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p>
 *          <p>For more information about managed policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline
 *             Policies</a> in the <i>IAM User Guide</i>. </p>
 */
export interface ManagedPolicyDetail {
  /**
   * <p>The friendly name (not ARN) identifying the policy.</p>
   */
  PolicyName?: string;

  /**
   * <p>The stable and unique string identifying the policy.</p>
   *          <p>For more information about IDs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the
   *             <i>IAM User Guide</i>.</p>
   */
  PolicyId?: string;

  /**
   * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p>
   *          <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS
   *             Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
   */
  Arn?: string;

  /**
   * <p>The path to the policy.</p>
   *          <p>For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the
   *             <i>IAM User Guide</i>.</p>
   */
  Path?: string;

  /**
   * <p>The identifier for the version of the policy that is set as the default (operative)
   *          version.</p>
   *          <p>For more information about policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for Managed
   *             Policies</a> in the <i>IAM User Guide</i>. </p>
   */
  DefaultVersionId?: string;

  /**
   * <p>The number of principal entities (users, groups, and roles) that the policy is attached
   *          to.</p>
   */
  AttachmentCount?: number;

  /**
   * <p>The number of entities (users and roles) for which the policy is used as the permissions
   *          boundary. </p>
   *          <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions Boundaries for IAM
   *             Identities </a> in the <i>IAM User Guide</i>.</p>
   */
  PermissionsBoundaryUsageCount?: number;

  /**
   * <p>Specifies whether the policy can be attached to an IAM user, group, or role.</p>
   */
  IsAttachable?: boolean;

  /**
   * <p>A friendly description of the policy.</p>
   */
  Description?: string;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the policy was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the policy was last updated.</p>
   *          <p>When a policy has only one version, this field contains the date and time when the
   *          policy was created. When a policy has more than one version, this field contains the date
   *          and time when the most recent policy version was created.</p>
   */
  UpdateDate?: Date;

  /**
   * <p>A list containing information about the versions of the policy.</p>
   */
  PolicyVersionList?: PolicyVersion[];
}

export namespace ManagedPolicyDetail {
  export const filterSensitiveLog = (obj: ManagedPolicyDetail): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about an IAM role, including all of the role's policies.</p>
 *          <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p>
 */
export interface RoleDetail {
  /**
   * <p>The path to the role. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the
   *             <i>IAM User Guide</i>.</p>
   */
  Path?: string;

  /**
   * <p>The friendly name that identifies the role.</p>
   */
  RoleName?: string;

  /**
   * <p>The stable and unique string identifying the role. For more information about IDs, see
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
   *             Identifiers</a> in the <i>IAM User Guide</i>.</p>
   */
  RoleId?: string;

  /**
   * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p>
   *          <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS
   *             Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
   */
  Arn?: string;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the role was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The trust policy that grants permission to assume the role.</p>
   */
  AssumeRolePolicyDocument?: string;

  /**
   * <p>A list of instance profiles that contain this role.</p>
   */
  InstanceProfileList?: InstanceProfile[];

  /**
   * <p>A list of inline policies embedded in the role. These policies are the role's access
   *          (permissions) policies.</p>
   */
  RolePolicyList?: PolicyDetail[];

  /**
   * <p>A list of managed policies attached to the role. These policies are the role's access
   *          (permissions) policies.</p>
   */
  AttachedManagedPolicies?: AttachedPolicy[];

  /**
   * <p>The ARN of the policy used to set the permissions boundary for the role.</p>
   *          <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions Boundaries for IAM
   *             Identities </a> in the <i>IAM User Guide</i>.</p>
   */
  PermissionsBoundary?: AttachedPermissionsBoundary;

  /**
   * <p>A list of tags that are attached to the specified role. For more information about
   *       tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM
   *         Identities</a> in the <i>IAM User Guide</i>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Contains information about the last time that an IAM role was used. This includes the
   *          date and time and the Region in which the role was last used. Activity is only reported for
   *          the trailing 400 days. This period can be shorter if your Region began supporting these
   *          features within the last year. The role might have been used more than 400 days ago. For
   *          more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#access-advisor_tracking-period">Regions Where Data Is Tracked</a> in the <i>IAM User
   *          Guide</i>.</p>
   */
  RoleLastUsed?: RoleLastUsed;
}

export namespace RoleDetail {
  export const filterSensitiveLog = (obj: RoleDetail): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about an IAM user, including all the user's policies and all the
 *          IAM groups the user is in.</p>
 *          <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p>
 */
export interface UserDetail {
  /**
   * <p>The path to the user. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the
   *             <i>IAM User Guide</i>.</p>
   */
  Path?: string;

  /**
   * <p>The friendly name identifying the user.</p>
   */
  UserName?: string;

  /**
   * <p>The stable and unique string identifying the user. For more information about IDs, see
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
   *             Identifiers</a> in the <i>IAM User Guide</i>.</p>
   */
  UserId?: string;

  /**
   * <p>Account email.</p>
   */
  Email?: string;

  /**
   * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p>
   *          <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS
   *             Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
   */
  Arn?: string;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the user was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>A list of the inline policies embedded in the user.</p>
   */
  UserPolicyList?: PolicyDetail[];

  /**
   * <p>A list of IAM groups that the user is in.</p>
   */
  GroupList?: string[];

  /**
   * <p>A list of the managed policies attached to the user.</p>
   */
  AttachedManagedPolicies?: AttachedPolicy[];

  /**
   * <p>The ARN of the policy used to set the permissions boundary for the user.</p>
   *          <p>For more information about permissions boundaries, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html">Permissions Boundaries for IAM
   *             Identities </a> in the <i>IAM User Guide</i>.</p>
   */
  PermissionsBoundary?: AttachedPermissionsBoundary;

  /**
   * <p>A list of tags that are associated with the specified user. For more information about
   *       tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM
   *         Identities</a> in the <i>IAM User Guide</i>.</p>
   */
  Tags?: Tag[];
}

export namespace UserDetail {
  export const filterSensitiveLog = (obj: UserDetail): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>GetAccountAuthorizationDetails</a>
 *       request. </p>
 */
export interface GetAccountAuthorizationDetailsResponse {
  /**
   * <p>A list containing information about IAM users.</p>
   */
  UserDetailList?: UserDetail[];

  /**
   * <p>A list containing information about IAM groups.</p>
   */
  GroupDetailList?: GroupDetail[];

  /**
   * <p>A list containing information about IAM roles.</p>
   */
  RoleDetailList?: RoleDetail[];

  /**
   * <p>A list containing information about managed policies.</p>
   */
  Policies?: ManagedPolicyDetail[];

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace GetAccountAuthorizationDetailsResponse {
  export const filterSensitiveLog = (obj: GetAccountAuthorizationDetailsResponse): any => ({
    ...obj,
  });
}

export interface GetAccountGroupRequest {
  /**
   * <p>Account group name.</p>
   */
  GroupName?: string;
}

export namespace GetAccountGroupRequest {
  export const filterSensitiveLog = (obj: GetAccountGroupRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>GetAccountAuthorizationDetails</a>
 *       request. </p>
 */
export interface GetAccountGroupResponse {
  /**
   * <p>A list containing information about IAM users.</p>
   */
  Accounts?: AccountType[];
}

export namespace GetAccountGroupResponse {
  export const filterSensitiveLog = (obj: GetAccountGroupResponse): any => ({
    ...obj,
  });
}

export interface GetAccountGroupMetaRequest {
  /**
   * <p>Account group name.</p>
   */
  GroupName?: string;
}

export namespace GetAccountGroupMetaRequest {
  export const filterSensitiveLog = (obj: GetAccountGroupMetaRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>GetAccountAuthorizationDetails</a>
 *       request. </p>
 */
export interface GetAccountGroupMetaResponse {
  /**
   * <p>A list containing information about IAM users.</p>
   */
  Group?: AccountGroupType;
}

export namespace GetAccountGroupMetaResponse {
  export const filterSensitiveLog = (obj: GetAccountGroupMetaResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the account password policy.</p>
 *          <p> This data type is used as a response element in the <a>GetAccountPasswordPolicy</a> operation. </p>
 */
export interface PasswordPolicy {
  /**
   * <p>Minimum length to require for IAM user passwords.</p>
   */
  MinimumPasswordLength?: number;

  /**
   * <p>Specifies whether to require symbols for IAM user passwords.</p>
   */
  RequireSymbols?: boolean;

  /**
   * <p>Specifies whether to require numbers for IAM user passwords.</p>
   */
  RequireNumbers?: boolean;

  /**
   * <p>Specifies whether to require uppercase characters for IAM user passwords.</p>
   */
  RequireUppercaseCharacters?: boolean;

  /**
   * <p>Specifies whether to require lowercase characters for IAM user passwords.</p>
   */
  RequireLowercaseCharacters?: boolean;

  /**
   * <p>Specifies whether IAM users are allowed to change their own password.</p>
   */
  AllowUsersToChangePassword?: boolean;

  /**
   * <p>Indicates whether passwords in the account expire. Returns true if
   *             <code>MaxPasswordAge</code> contains a value greater than 0. Returns false if
   *          MaxPasswordAge is 0 or not present.</p>
   */
  ExpirePasswords?: boolean;

  /**
   * <p>The number of days that an IAM user password is valid.</p>
   */
  MaxPasswordAge?: number;

  /**
   * <p>Specifies the number of previous passwords that IAM users are prevented from
   *          reusing.</p>
   */
  PasswordReusePrevention?: number;

  /**
   * <p>Specifies whether IAM users are prevented from setting a new password after their
   *          password has expired.</p>
   */
  HardExpiry?: boolean;
}

export namespace PasswordPolicy {
  export const filterSensitiveLog = (obj: PasswordPolicy): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>GetAccountPasswordPolicy</a>
 *       request. </p>
 */
export interface GetAccountPasswordPolicyResponse {
  /**
   * <p>A structure that contains details about the account's password policy.</p>
   */
  PasswordPolicy: PasswordPolicy | undefined;
}

export namespace GetAccountPasswordPolicyResponse {
  export const filterSensitiveLog = (obj: GetAccountPasswordPolicyResponse): any => ({
    ...obj,
  });
}

export interface GetAccountQosRequest {
  /**
   * <p>Account name.</p>
   */
  AccountName?: string;
}

export namespace GetAccountQosRequest {
  export const filterSensitiveLog = (obj: GetAccountQosRequest): any => ({
    ...obj,
  });
}

export interface QoSConfiguration {
  ReadOps?: number;
  WriteOps?: number;
  ReadBandwidth?: number;
  WriteBandwidth?: number;
}

export namespace QoSConfiguration {
  export const filterSensitiveLog = (obj: QoSConfiguration): any => ({
    ...obj,
  });
}

export interface GetAccountQosResponse {
  /**
   * <p>The qos of account.</p>
   */
  QoSConfiguration?: QoSConfiguration;
}

export namespace GetAccountQosResponse {
  export const filterSensitiveLog = (obj: GetAccountQosResponse): any => ({
    ...obj,
  });
}

export type SummaryKeyType =
  | "AccessKeysPerUserQuota"
  | "AccountAccessKeysPresent"
  | "AccountMFAEnabled"
  | "AccountSigningCertificatesPresent"
  | "AttachedPoliciesPerGroupQuota"
  | "AttachedPoliciesPerRoleQuota"
  | "AttachedPoliciesPerUserQuota"
  | "GlobalEndpointTokenVersion"
  | "GroupPolicySizeQuota"
  | "Groups"
  | "GroupsPerUserQuota"
  | "GroupsQuota"
  | "MFADevices"
  | "MFADevicesInUse"
  | "Policies"
  | "PoliciesQuota"
  | "PolicySizeQuota"
  | "PolicyVersionsInUse"
  | "PolicyVersionsInUseQuota"
  | "ServerCertificates"
  | "ServerCertificatesQuota"
  | "SigningCertificatesPerUserQuota"
  | "UserPolicySizeQuota"
  | "Users"
  | "UsersQuota"
  | "VersionsPerPolicyQuota";

/**
 * <p>Contains the response to a successful <a>GetAccountSummary</a> request.
 *     </p>
 */
export interface GetAccountSummaryResponse {
  /**
   * <p>A set of key–value pairs containing information about IAM entity usage and
   *          IAM quotas.</p>
   */
  SummaryMap?: { [key: string]: number };
}

export namespace GetAccountSummaryResponse {
  export const filterSensitiveLog = (obj: GetAccountSummaryResponse): any => ({
    ...obj,
  });
}

export interface GetContextKeysForCustomPolicyRequest {
  /**
   * <p>A list of policies for which you want the list of context keys referenced in those
   *          policies. Each document is specified as a string containing the complete, valid JSON text
   *          of an IAM policy.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   */
  PolicyInputList: string[] | undefined;
}

export namespace GetContextKeysForCustomPolicyRequest {
  export const filterSensitiveLog = (obj: GetContextKeysForCustomPolicyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>GetContextKeysForPrincipalPolicy</a> or <a>GetContextKeysForCustomPolicy</a> request. </p>
 */
export interface GetContextKeysForPolicyResponse {
  /**
   * <p>The list of context keys that are referenced in the input policies.</p>
   */
  ContextKeyNames?: string[];
}

export namespace GetContextKeysForPolicyResponse {
  export const filterSensitiveLog = (obj: GetContextKeysForPolicyResponse): any => ({
    ...obj,
  });
}

export interface GetContextKeysForPrincipalPolicyRequest {
  /**
   * <p>The ARN of a user, group, or role whose policies contain the context keys that you want
   *          listed. If you specify a user, the list includes context keys that are found in all
   *          policies that are attached to the user. The list also includes all groups that the user is
   *          a member of. If you pick a group or a role, then it includes only those context keys that
   *          are found in policies attached to that entity. Note that all parameters are shown in
   *          unencoded form here for clarity, but must be URL encoded to be included as a part of a real
   *          HTML request.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  PolicySourceArn: string | undefined;

  /**
   * <p>An optional list of additional policies for which you want the list of context keys that
   *          are referenced.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   */
  PolicyInputList?: string[];
}

export namespace GetContextKeysForPrincipalPolicyRequest {
  export const filterSensitiveLog = (obj: GetContextKeysForPrincipalPolicyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because the most recent credential report has expired. To
 *       generate a new credential report, use <a>GenerateCredentialReport</a>. For more
 *       information about credential report expiration, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/credential-reports.html">Getting Credential Reports</a> in the
 *         <i>IAM User Guide</i>.</p>
 */
export interface CredentialReportExpiredException extends __SmithyException, $MetadataBearer {
  name: "CredentialReportExpiredException";
  $fault: "client";
  message?: string;
}

export namespace CredentialReportExpiredException {
  export const filterSensitiveLog = (obj: CredentialReportExpiredException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because the credential report does not exist. To generate a
 *       credential report, use <a>GenerateCredentialReport</a>.</p>
 */
export interface CredentialReportNotPresentException extends __SmithyException, $MetadataBearer {
  name: "CredentialReportNotPresentException";
  $fault: "client";
  message?: string;
}

export namespace CredentialReportNotPresentException {
  export const filterSensitiveLog = (obj: CredentialReportNotPresentException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because the credential report is still being
 *       generated.</p>
 */
export interface CredentialReportNotReadyException extends __SmithyException, $MetadataBearer {
  name: "CredentialReportNotReadyException";
  $fault: "client";
  message?: string;
}

export namespace CredentialReportNotReadyException {
  export const filterSensitiveLog = (obj: CredentialReportNotReadyException): any => ({
    ...obj,
  });
}

export type ReportFormatType = "text/csv";

/**
 * <p>Contains the response to a successful <a>GetCredentialReport</a> request.
 *     </p>
 */
export interface GetCredentialReportResponse {
  /**
   * <p>Contains the credential report. The report is Base64-encoded.</p>
   */
  Content?: Uint8Array;

  /**
   * <p>The format (MIME type) of the credential report.</p>
   */
  ReportFormat?: ReportFormatType | string;

  /**
   * <p> The date and time when the credential report was created, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time format</a>.</p>
   */
  GeneratedTime?: Date;
}

export namespace GetCredentialReportResponse {
  export const filterSensitiveLog = (obj: GetCredentialReportResponse): any => ({
    ...obj,
  });
}

export interface GetGroupRequest {
  /**
   * <p>The name of the group.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  GroupName: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;
}

export namespace GetGroupRequest {
  export const filterSensitiveLog = (obj: GetGroupRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>GetGroup</a> request. </p>
 */
export interface GetGroupResponse {
  /**
   * <p>A structure that contains details about the group.</p>
   */
  Group: Group | undefined;

  /**
   * <p>A list of users in the group.</p>
   */
  Users: User[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace GetGroupResponse {
  export const filterSensitiveLog = (obj: GetGroupResponse): any => ({
    ...obj,
  });
}

export interface GetGroupPolicyRequest {
  /**
   * <p>The name of the group the policy is associated with.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The name of the policy document to get.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  PolicyName: string | undefined;
}

export namespace GetGroupPolicyRequest {
  export const filterSensitiveLog = (obj: GetGroupPolicyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>GetGroupPolicy</a> request.
 *     </p>
 */
export interface GetGroupPolicyResponse {
  /**
   * <p>The group the policy is associated with.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The name of the policy.</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>The policy document.</p>
   *          <p>IAM stores policies in JSON format. However, resources that were created using AWS
   *          CloudFormation templates can be formatted in YAML. AWS CloudFormation always converts a
   *          YAML policy to JSON format before submitting it to IAM.</p>
   */
  PolicyDocument: string | undefined;
}

export namespace GetGroupPolicyResponse {
  export const filterSensitiveLog = (obj: GetGroupPolicyResponse): any => ({
    ...obj,
  });
}

export interface GetInstanceProfileRequest {
  /**
   * <p>The name of the instance profile to get information about.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  InstanceProfileName: string | undefined;
}

export namespace GetInstanceProfileRequest {
  export const filterSensitiveLog = (obj: GetInstanceProfileRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>GetInstanceProfile</a> request.
 *     </p>
 */
export interface GetInstanceProfileResponse {
  /**
   * <p>A structure containing details about the instance profile.</p>
   */
  InstanceProfile: InstanceProfile | undefined;
}

export namespace GetInstanceProfileResponse {
  export const filterSensitiveLog = (obj: GetInstanceProfileResponse): any => ({
    ...obj,
  });
}

export interface GetLoginProfileRequest {
  /**
   * <p>The name of the user whose login profile you want to retrieve.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;
}

export namespace GetLoginProfileRequest {
  export const filterSensitiveLog = (obj: GetLoginProfileRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>GetLoginProfile</a> request.
 *     </p>
 */
export interface GetLoginProfileResponse {
  /**
   * <p>A structure containing the user name and password create date for the user.</p>
   */
  LoginProfile: LoginProfile | undefined;
}

export namespace GetLoginProfileResponse {
  export const filterSensitiveLog = (obj: GetLoginProfileResponse): any => ({
    ...obj,
  });
}

export interface GetOpenIDConnectProviderRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the OIDC provider resource object in IAM to get
   *          information for. You can get a list of OIDC provider resource ARNs by using the <a>ListOpenIDConnectProviders</a> operation.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  OpenIDConnectProviderArn: string | undefined;
}

export namespace GetOpenIDConnectProviderRequest {
  export const filterSensitiveLog = (obj: GetOpenIDConnectProviderRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>GetOpenIDConnectProvider</a>
 *       request. </p>
 */
export interface GetOpenIDConnectProviderResponse {
  /**
   * <p>The URL that the IAM OIDC provider resource object is associated with. For more
   *          information, see <a>CreateOpenIDConnectProvider</a>.</p>
   */
  Url?: string;

  /**
   * <p>A list of client IDs (also known as audiences) that are associated with the specified
   *          IAM OIDC provider resource object. For more information, see <a>CreateOpenIDConnectProvider</a>.</p>
   */
  ClientIDList?: string[];

  /**
   * <p>A list of certificate thumbprints that are associated with the specified IAM OIDC
   *          provider resource object. For more information, see <a>CreateOpenIDConnectProvider</a>. </p>
   */
  ThumbprintList?: string[];

  /**
   * <p>The date and time when the IAM OIDC provider resource object was created in the AWS
   *          account.</p>
   */
  CreateDate?: Date;
}

export namespace GetOpenIDConnectProviderResponse {
  export const filterSensitiveLog = (obj: GetOpenIDConnectProviderResponse): any => ({
    ...obj,
  });
}

export enum SortKeyType {
  LAST_AUTHENTICATED_TIME_ASCENDING = "LAST_AUTHENTICATED_TIME_ASCENDING",
  LAST_AUTHENTICATED_TIME_DESCENDING = "LAST_AUTHENTICATED_TIME_DESCENDING",
  SERVICE_NAMESPACE_ASCENDING = "SERVICE_NAMESPACE_ASCENDING",
  SERVICE_NAMESPACE_DESCENDING = "SERVICE_NAMESPACE_DESCENDING",
}

export interface GetOrganizationsAccessReportRequest {
  /**
   * <p>The identifier of the request generated by the <a>GenerateOrganizationsAccessReport</a> operation.</p>
   */
  JobId: string | undefined;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>The key that is used to sort the results. If you choose the namespace key, the results
   *          are returned in alphabetical order. If you choose the time key, the results are sorted
   *          numerically by the date and time.</p>
   */
  SortKey?: SortKeyType | string;
}

export namespace GetOrganizationsAccessReportRequest {
  export const filterSensitiveLog = (obj: GetOrganizationsAccessReportRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about the reason that the operation failed.</p>
 *          <p>This data type is used as a response element in the <a>GetOrganizationsAccessReport</a>, <a>GetServiceLastAccessedDetails</a>, and <a>GetServiceLastAccessedDetailsWithEntities</a> operations.</p>
 */
export interface ErrorDetails {
  /**
   * <p>Detailed information about the reason that the operation failed.</p>
   */
  Message: string | undefined;

  /**
   * <p>The error code associated with the operation failure.</p>
   */
  Code: string | undefined;
}

export namespace ErrorDetails {
  export const filterSensitiveLog = (obj: ErrorDetails): any => ({
    ...obj,
  });
}

export type JobStatusType = "COMPLETED" | "FAILED" | "IN_PROGRESS";

export interface GetOrganizationsAccessReportResponse {
  /**
   * <p>The status of the job.</p>
   */
  JobStatus: JobStatusType | string | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the report job was created.</p>
   */
  JobCreationDate: Date | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the generated report job was completed or failed.</p>
   *          <p>This field is null if the job is still in progress, as indicated by a job status value
   *          of <code>IN_PROGRESS</code>.</p>
   */
  JobCompletionDate?: Date;

  /**
   * <p>The number of services that the applicable SCPs allow account principals to
   *          access.</p>
   */
  NumberOfServicesAccessible?: number;

  /**
   * <p>The number of services that account principals are allowed but did not attempt to
   *          access.</p>
   */
  NumberOfServicesNotAccessed?: number;

  /**
   * <p>An object that contains details about the most recent attempt to access the
   *          service.</p>
   */
  AccessDetails?: AccessDetail[];

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;

  /**
   * <p>Contains information about the reason that the operation failed.</p>
   *          <p>This data type is used as a response element in the <a>GetOrganizationsAccessReport</a>, <a>GetServiceLastAccessedDetails</a>, and <a>GetServiceLastAccessedDetailsWithEntities</a> operations.</p>
   */
  ErrorDetails?: ErrorDetails;
}

export namespace GetOrganizationsAccessReportResponse {
  export const filterSensitiveLog = (obj: GetOrganizationsAccessReportResponse): any => ({
    ...obj,
  });
}

export interface GetPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the managed policy that you want information
   *          about.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  PolicyArn: string | undefined;
}

export namespace GetPolicyRequest {
  export const filterSensitiveLog = (obj: GetPolicyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>GetPolicy</a> request. </p>
 */
export interface GetPolicyResponse {
  /**
   * <p>A structure containing details about the policy.</p>
   */
  Policy?: Policy;
}

export namespace GetPolicyResponse {
  export const filterSensitiveLog = (obj: GetPolicyResponse): any => ({
    ...obj,
  });
}

export interface GetPolicyVersionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the managed policy that you want information
   *          about.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  PolicyArn: string | undefined;

  /**
   * <p>Identifies the policy version to retrieve.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that
   *     consists of the lowercase letter 'v' followed by one or two digits, and optionally
   *     followed by a period '.' and a string of letters and digits.</p>
   */
  VersionId: string | undefined;
}

export namespace GetPolicyVersionRequest {
  export const filterSensitiveLog = (obj: GetPolicyVersionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>GetPolicyVersion</a> request.
 *     </p>
 */
export interface GetPolicyVersionResponse {
  /**
   * <p>A structure containing details about the policy version.</p>
   */
  PolicyVersion?: PolicyVersion;
}

export namespace GetPolicyVersionResponse {
  export const filterSensitiveLog = (obj: GetPolicyVersionResponse): any => ({
    ...obj,
  });
}

export interface GetRoleRequest {
  /**
   * <p>The name of the IAM role to get information about.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  RoleName: string | undefined;
}

export namespace GetRoleRequest {
  export const filterSensitiveLog = (obj: GetRoleRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>GetRole</a> request. </p>
 */
export interface GetRoleResponse {
  /**
   * <p>A structure containing details about the IAM role.</p>
   */
  Role: Role | undefined;
}

export namespace GetRoleResponse {
  export const filterSensitiveLog = (obj: GetRoleResponse): any => ({
    ...obj,
  });
}

export interface GetRolePolicyRequest {
  /**
   * <p>The name of the role associated with the policy.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  RoleName: string | undefined;

  /**
   * <p>The name of the policy document to get.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  PolicyName: string | undefined;
}

export namespace GetRolePolicyRequest {
  export const filterSensitiveLog = (obj: GetRolePolicyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>GetRolePolicy</a> request.
 *     </p>
 */
export interface GetRolePolicyResponse {
  /**
   * <p>The role the policy is associated with.</p>
   */
  RoleName: string | undefined;

  /**
   * <p>The name of the policy.</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>The policy document.</p>
   *          <p>IAM stores policies in JSON format. However, resources that were created using AWS
   *          CloudFormation templates can be formatted in YAML. AWS CloudFormation always converts a
   *          YAML policy to JSON format before submitting it to IAM.</p>
   */
  PolicyDocument: string | undefined;
}

export namespace GetRolePolicyResponse {
  export const filterSensitiveLog = (obj: GetRolePolicyResponse): any => ({
    ...obj,
  });
}

export interface GetSAMLProviderRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the SAML provider resource object in IAM to get
   *          information about.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  SAMLProviderArn: string | undefined;
}

export namespace GetSAMLProviderRequest {
  export const filterSensitiveLog = (obj: GetSAMLProviderRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>GetSAMLProvider</a> request.
 *     </p>
 */
export interface GetSAMLProviderResponse {
  /**
   * <p>The XML metadata document that includes information about an identity provider.</p>
   */
  SAMLMetadataDocument?: string;

  /**
   * <p>The date and time when the SAML provider was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The expiration date and time for the SAML provider.</p>
   */
  ValidUntil?: Date;
}

export namespace GetSAMLProviderResponse {
  export const filterSensitiveLog = (obj: GetSAMLProviderResponse): any => ({
    ...obj,
  });
}

export interface GetServerCertificateRequest {
  /**
   * <p>The name of the server certificate you want to retrieve information about.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  ServerCertificateName: string | undefined;
}

export namespace GetServerCertificateRequest {
  export const filterSensitiveLog = (obj: GetServerCertificateRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a server certificate without its certificate body,
 *          certificate chain, and private key.</p>
 *          <p> This data type is used as a response element in the <a>UploadServerCertificate</a> and <a>ListServerCertificates</a>
 *          operations. </p>
 */
export interface ServerCertificateMetadata {
  /**
   * <p> The path to the server certificate. For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
   *             Identifiers</a> in the <i>IAM User Guide</i>. </p>
   */
  Path: string | undefined;

  /**
   * <p>The name that identifies the server certificate.</p>
   */
  ServerCertificateName: string | undefined;

  /**
   * <p> The stable and unique string identifying the server certificate. For more information
   *          about IDs, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the <i>IAM User Guide</i>. </p>
   */
  ServerCertificateId: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) specifying the server certificate. For more information
   *          about ARNs and how to use them in policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM Identifiers</a> in the
   *             <i>IAM User Guide</i>. </p>
   */
  Arn: string | undefined;

  /**
   * <p>The date when the server certificate was uploaded.</p>
   */
  UploadDate?: Date;

  /**
   * <p>The date on which the certificate is set to expire.</p>
   */
  Expiration?: Date;
}

export namespace ServerCertificateMetadata {
  export const filterSensitiveLog = (obj: ServerCertificateMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a server certificate.</p>
 *          <p> This data type is used as a response element in the <a>GetServerCertificate</a> operation. </p>
 */
export interface ServerCertificate {
  /**
   * <p>The meta information of the server certificate, such as its name, path, ID, and
   *          ARN.</p>
   */
  ServerCertificateMetadata: ServerCertificateMetadata | undefined;

  /**
   * <p>The contents of the public key certificate.</p>
   */
  CertificateBody: string | undefined;

  /**
   * <p>The contents of the public key certificate chain.</p>
   */
  CertificateChain?: string;
}

export namespace ServerCertificate {
  export const filterSensitiveLog = (obj: ServerCertificate): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>GetServerCertificate</a> request.
 *     </p>
 */
export interface GetServerCertificateResponse {
  /**
   * <p>A structure containing details about the server certificate.</p>
   */
  ServerCertificate: ServerCertificate | undefined;
}

export namespace GetServerCertificateResponse {
  export const filterSensitiveLog = (obj: GetServerCertificateResponse): any => ({
    ...obj,
  });
}

export interface GetServiceLastAccessedDetailsRequest {
  /**
   * <p>The ID of the request generated by the <a>GenerateServiceLastAccessedDetails</a> operation. The <code>JobId</code>
   *          returned by <code>GenerateServiceLastAccessedDetail</code> must be used by the same role
   *          within a session, or by the same user when used to call
   *             <code>GetServiceLastAccessedDetail</code>.</p>
   */
  JobId: string | undefined;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;
}

export namespace GetServiceLastAccessedDetailsRequest {
  export const filterSensitiveLog = (obj: GetServiceLastAccessedDetailsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains details about the most recent attempt to access an action within the service.</p>
 *          <p>This data type is used as a response element in the <a>GetServiceLastAccessedDetails</a> operation.</p>
 */
export interface TrackedActionLastAccessed {
  /**
   * <p>The name of the tracked action to which access was attempted. Tracked actions are
   *          actions that report activity to IAM.</p>
   */
  ActionName?: string;

  /**
   * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p>
   *          <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS
   *             Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
   */
  LastAccessedEntity?: string;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when an authenticated entity most recently attempted to access the
   *          tracked service. AWS does not report unauthenticated requests.</p>
   *          <p>This field is null if no IAM entities attempted to access the service within the
   *          <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">reporting period</a>.</p>
   */
  LastAccessedTime?: Date;

  /**
   * <p>The Region from which the authenticated entity (user or role) last attempted to access
   *          the tracked action. AWS does not report unauthenticated requests.</p>
   *          <p>This field is null if no IAM entities attempted to access the service within the
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">reporting period</a>.</p>
   */
  LastAccessedRegion?: string;
}

export namespace TrackedActionLastAccessed {
  export const filterSensitiveLog = (obj: TrackedActionLastAccessed): any => ({
    ...obj,
  });
}

/**
 * <p>Contains details about the most recent attempt to access the service.</p>
 *          <p>This data type is used as a response element in the <a>GetServiceLastAccessedDetails</a> operation.</p>
 */
export interface ServiceLastAccessed {
  /**
   * <p>The name of the service in which access was attempted.</p>
   */
  ServiceName: string | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when an authenticated entity most recently attempted to access the
   *          service. AWS does not report unauthenticated requests.</p>
   *          <p>This field is null if no IAM entities attempted to access the service within the
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">reporting period</a>.</p>
   */
  LastAuthenticated?: Date;

  /**
   * <p>The namespace of the service in which access was attempted.</p>
   *          <p>To learn the service namespace of a service, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_actions-resources-contextkeys.html">Actions,
   *             Resources, and Condition Keys for AWS Services</a> in the
   *             <i>IAM User Guide</i>. Choose the name of the service to view details
   *          for that service. In the first paragraph, find the service prefix. For example,
   *             <code>(service prefix: a4b)</code>. For more information about service namespaces, see
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">AWS
   *             Service Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  ServiceNamespace: string | undefined;

  /**
   * <p>The ARN of the authenticated entity (user or role) that last attempted to access the
   *          service. AWS does not report unauthenticated requests.</p>
   *          <p>This field is null if no IAM entities attempted to access the service within the
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">reporting period</a>.</p>
   */
  LastAuthenticatedEntity?: string;

  /**
   * <p>The Region from which the authenticated entity (user or role) last attempted to access
   *          the service. AWS does not report unauthenticated requests.</p>
   *          <p>This field is null if no IAM entities attempted to access the service within the
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">reporting period</a>.</p>
   */
  LastAuthenticatedRegion?: string;

  /**
   * <p>The total number of authenticated principals (root user, IAM users, or IAM roles)
   *          that have attempted to access the service.</p>
   *          <p>This field is null if no principals attempted to access the service within the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">reporting period</a>.</p>
   */
  TotalAuthenticatedEntities?: number;

  /**
   * <p>An object that contains details about the most recent attempt to access a tracked action
   *          within the service.</p>
   *          <p>This field is null if there no tracked actions or if the principal did not use the
   *          tracked actions within the <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">reporting period</a>. This field is also null if the report was generated at the
   *          service level and not the action level. For more information, see the
   *             <code>Granularity</code> field in <a>GenerateServiceLastAccessedDetails</a>.</p>
   */
  TrackedActionsLastAccessed?: TrackedActionLastAccessed[];
}

export namespace ServiceLastAccessed {
  export const filterSensitiveLog = (obj: ServiceLastAccessed): any => ({
    ...obj,
  });
}

export interface GetServiceLastAccessedDetailsResponse {
  /**
   * <p>The status of the job.</p>
   */
  JobStatus: JobStatusType | string | undefined;

  /**
   * <p>The type of job. Service jobs return information about when each service was last
   *          accessed. Action jobs also include information about when tracked actions within the
   *          service were last accessed.</p>
   */
  JobType?: AccessAdvisorUsageGranularityType | string;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the report job was created.</p>
   */
  JobCreationDate: Date | undefined;

  /**
   * <p> A <code>ServiceLastAccessed</code> object that contains details about the most recent
   *          attempt to access the service.</p>
   */
  ServicesLastAccessed: ServiceLastAccessed[] | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the generated report job was completed or failed.</p>
   *          <p>This field is null if the job is still in progress, as indicated by a job status value
   *          of <code>IN_PROGRESS</code>.</p>
   */
  JobCompletionDate: Date | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;

  /**
   * <p>An object that contains details about the reason the operation failed.</p>
   */
  Error?: ErrorDetails;
}

export namespace GetServiceLastAccessedDetailsResponse {
  export const filterSensitiveLog = (obj: GetServiceLastAccessedDetailsResponse): any => ({
    ...obj,
  });
}

export interface GetServiceLastAccessedDetailsWithEntitiesRequest {
  /**
   * <p>The ID of the request generated by the <code>GenerateServiceLastAccessedDetails</code>
   *          operation.</p>
   */
  JobId: string | undefined;

  /**
   * <p>The service namespace for an AWS service. Provide the service namespace to learn when
   *          the IAM entity last attempted to access the specified service.</p>
   *          <p>To learn the service namespace for a service, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_actions-resources-contextkeys.html">Actions,
   *             Resources, and Condition Keys for AWS Services</a> in the
   *             <i>IAM User Guide</i>. Choose the name of the service to view details
   *          for that service. In the first paragraph, find the service prefix. For example,
   *             <code>(service prefix: a4b)</code>. For more information about service namespaces, see
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">AWS
   *             Service Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  ServiceNamespace: string | undefined;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;
}

export namespace GetServiceLastAccessedDetailsWithEntitiesRequest {
  export const filterSensitiveLog = (obj: GetServiceLastAccessedDetailsWithEntitiesRequest): any => ({
    ...obj,
  });
}

export enum PolicyOwnerEntityType {
  GROUP = "GROUP",
  ROLE = "ROLE",
  USER = "USER",
}

/**
 * <p>Contains details about the specified entity (user or role).</p>
 *          <p>This data type is an element of the <a>EntityDetails</a> object.</p>
 */
export interface EntityInfo {
  /**
   * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p>
   *          <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS
   *             Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
   */
  Arn: string | undefined;

  /**
   * <p>The name of the entity (user or role).</p>
   */
  Name: string | undefined;

  /**
   * <p>The type of entity (user or role).</p>
   */
  Type: PolicyOwnerEntityType | string | undefined;

  /**
   * <p>The identifier of the entity (user or role).</p>
   */
  Id: string | undefined;

  /**
   * <p>The path to the entity (user or role). For more information about paths, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html">IAM
   *             Identifiers</a> in the <i>IAM User Guide</i>. </p>
   */
  Path?: string;
}

export namespace EntityInfo {
  export const filterSensitiveLog = (obj: EntityInfo): any => ({
    ...obj,
  });
}

/**
 * <p>An object that contains details about when the IAM entities (users or roles) were last
 *          used in an attempt to access the specified AWS service.</p>
 *          <p>This data type is a response element in the <a>GetServiceLastAccessedDetailsWithEntities</a> operation.</p>
 */
export interface EntityDetails {
  /**
   * <p>The <code>EntityInfo</code> object that contains details about the entity (user or
   *          role).</p>
   */
  EntityInfo: EntityInfo | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the authenticated entity last attempted to access AWS. AWS does
   *          not report unauthenticated requests.</p>
   *          <p>This field is null if no IAM entities attempted to access the service within the
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html#service-last-accessed-reporting-period">reporting period</a>.</p>
   */
  LastAuthenticated?: Date;
}

export namespace EntityDetails {
  export const filterSensitiveLog = (obj: EntityDetails): any => ({
    ...obj,
  });
}

export interface GetServiceLastAccessedDetailsWithEntitiesResponse {
  /**
   * <p>The status of the job.</p>
   */
  JobStatus: JobStatusType | string | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the report job was created.</p>
   */
  JobCreationDate: Date | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the generated report job was completed or failed.</p>
   *          <p>This field is null if the job is still in progress, as indicated by a job status value
   *          of <code>IN_PROGRESS</code>.</p>
   */
  JobCompletionDate: Date | undefined;

  /**
   * <p>An <code>EntityDetailsList</code> object that contains details about when an IAM
   *          entity (user or role) used group or policy permissions in an attempt to access the
   *          specified AWS service.</p>
   */
  EntityDetailsList: EntityDetails[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;

  /**
   * <p>An object that contains details about the reason the operation failed.</p>
   */
  Error?: ErrorDetails;
}

export namespace GetServiceLastAccessedDetailsWithEntitiesResponse {
  export const filterSensitiveLog = (obj: GetServiceLastAccessedDetailsWithEntitiesResponse): any => ({
    ...obj,
  });
}

export interface GetServiceLinkedRoleDeletionStatusRequest {
  /**
   * <p>The deletion task identifier. This identifier is returned by the <a>DeleteServiceLinkedRole</a> operation in the format
   *             <code>task/aws-service-role/<service-principal-name>/<role-name>/<task-uuid></code>.</p>
   */
  DeletionTaskId: string | undefined;
}

export namespace GetServiceLinkedRoleDeletionStatusRequest {
  export const filterSensitiveLog = (obj: GetServiceLinkedRoleDeletionStatusRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An object that contains details about how a service-linked role is used, if that
 *          information is returned by the service.</p>
 *          <p>This data type is used as a response element in the <a>GetServiceLinkedRoleDeletionStatus</a> operation.</p>
 */
export interface RoleUsageType {
  /**
   * <p>The name of the Region where the service-linked role is being used.</p>
   */
  Region?: string;

  /**
   * <p>The name of the resource that is using the service-linked role.</p>
   */
  Resources?: string[];
}

export namespace RoleUsageType {
  export const filterSensitiveLog = (obj: RoleUsageType): any => ({
    ...obj,
  });
}

/**
 * <p>The reason that the service-linked role deletion failed.</p>
 *          <p>This data type is used as a response element in the <a>GetServiceLinkedRoleDeletionStatus</a> operation.</p>
 */
export interface DeletionTaskFailureReasonType {
  /**
   * <p>A short description of the reason that the service-linked role deletion failed.</p>
   */
  Reason?: string;

  /**
   * <p>A list of objects that contains details about the service-linked role deletion failure,
   *          if that information is returned by the service. If the service-linked role has active
   *          sessions or if any resources that were used by the role have not been deleted from the
   *          linked service, the role can't be deleted. This parameter includes a list of the resources
   *          that are associated with the role and the Region in which the resources are being
   *          used.</p>
   */
  RoleUsageList?: RoleUsageType[];
}

export namespace DeletionTaskFailureReasonType {
  export const filterSensitiveLog = (obj: DeletionTaskFailureReasonType): any => ({
    ...obj,
  });
}

export enum DeletionTaskStatusType {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  NOT_STARTED = "NOT_STARTED",
  SUCCEEDED = "SUCCEEDED",
}

export interface GetServiceLinkedRoleDeletionStatusResponse {
  /**
   * <p>The status of the deletion.</p>
   */
  Status: DeletionTaskStatusType | string | undefined;

  /**
   * <p>An object that contains details about the reason the deletion failed.</p>
   */
  Reason?: DeletionTaskFailureReasonType;
}

export namespace GetServiceLinkedRoleDeletionStatusResponse {
  export const filterSensitiveLog = (obj: GetServiceLinkedRoleDeletionStatusResponse): any => ({
    ...obj,
  });
}

export type EncodingType = "PEM" | "SSH";

export interface GetSSHPublicKeyRequest {
  /**
   * <p>The name of the IAM user associated with the SSH public key.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;

  /**
   * <p>The unique identifier for the SSH public key.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can
   *     consist of any upper or lowercased letter or digit.</p>
   */
  SSHPublicKeyId: string | undefined;

  /**
   * <p>Specifies the public key encoding format to use in the response. To retrieve the public
   *          key in ssh-rsa format, use <code>SSH</code>. To retrieve the public key in PEM format, use
   *             <code>PEM</code>.</p>
   */
  Encoding: EncodingType | string | undefined;
}

export namespace GetSSHPublicKeyRequest {
  export const filterSensitiveLog = (obj: GetSSHPublicKeyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about an SSH public key.</p>
 *          <p>This data type is used as a response element in the <a>GetSSHPublicKey</a>
 *          and <a>UploadSSHPublicKey</a> operations. </p>
 */
export interface SSHPublicKey {
  /**
   * <p>The name of the IAM user associated with the SSH public key.</p>
   */
  UserName: string | undefined;

  /**
   * <p>The unique identifier for the SSH public key.</p>
   */
  SSHPublicKeyId: string | undefined;

  /**
   * <p>The MD5 message digest of the SSH public key.</p>
   */
  Fingerprint: string | undefined;

  /**
   * <p>The SSH public key.</p>
   */
  SSHPublicKeyBody: string | undefined;

  /**
   * <p>The status of the SSH public key. <code>Active</code> means that the key can be used for
   *          authentication with an AWS CodeCommit repository. <code>Inactive</code> means that the key
   *          cannot be used.</p>
   */
  Status: StatusType | string | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the SSH public key was uploaded.</p>
   */
  UploadDate?: Date;
}

export namespace SSHPublicKey {
  export const filterSensitiveLog = (obj: SSHPublicKey): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>GetSSHPublicKey</a>
 *       request.</p>
 */
export interface GetSSHPublicKeyResponse {
  /**
   * <p>A structure containing details about the SSH public key.</p>
   */
  SSHPublicKey?: SSHPublicKey;
}

export namespace GetSSHPublicKeyResponse {
  export const filterSensitiveLog = (obj: GetSSHPublicKeyResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request was rejected because the public key encoding format is unsupported or
 *       unrecognized.</p>
 */
export interface UnrecognizedPublicKeyEncodingException extends __SmithyException, $MetadataBearer {
  name: "UnrecognizedPublicKeyEncodingException";
  $fault: "client";
  message?: string;
}

export namespace UnrecognizedPublicKeyEncodingException {
  export const filterSensitiveLog = (obj: UnrecognizedPublicKeyEncodingException): any => ({
    ...obj,
  });
}

export interface GetUserRequest {
  /**
   * <p>The name of the user to get information about.</p>
   *          <p>This parameter is optional. If it is not included, it defaults to the user making the
   *          request. This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName?: string;

  Type?: number;
}

export namespace GetUserRequest {
  export const filterSensitiveLog = (obj: GetUserRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>GetUser</a> request. </p>
 */
export interface GetUserResponse {
  /**
   * <p>A structure containing details about the IAM user.</p>
   *          <important>
   *             <p>Due to a service issue, password last used data does not include password use from
   *             May 3, 2018 22:50 PDT to May 23, 2018 14:08 PDT. This affects <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_finding-unused.html">last
   *                sign-in</a> dates shown in the IAM console and password last used dates in the
   *                <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_getting-report.html">IAM credential report</a>, and returned by this GetUser API. If users signed in
   *             during the affected time, the password last used date that is returned is the date the
   *             user last signed in before May 3, 2018. For users that signed in after May 23, 2018
   *             14:08 PDT, the returned password last used date is accurate.</p>
   *             <p>You can use password last used information to identify unused credentials for
   *             deletion. For example, you might delete users who did not sign in to AWS in the last 90
   *             days. In cases like this, we recommend that you adjust your evaluation window to include
   *             dates after May 23, 2018. Alternatively, if your users use access keys to access AWS
   *             programmatically you can refer to access key last used information because it is
   *             accurate for all dates. </p>
   *          </important>
   */
  User: User | undefined;
}

export namespace GetUserResponse {
  export const filterSensitiveLog = (obj: GetUserResponse): any => ({
    ...obj,
  });
}

export interface GetUserPolicyRequest {
  /**
   * <p>The name of the user who the policy is associated with.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;

  /**
   * <p>The name of the policy document to get.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  PolicyName: string | undefined;
}

export namespace GetUserPolicyRequest {
  export const filterSensitiveLog = (obj: GetUserPolicyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>GetUserPolicy</a> request.
 *     </p>
 */
export interface GetUserPolicyResponse {
  /**
   * <p>The user the policy is associated with.</p>
   */
  UserName: string | undefined;

  /**
   * <p>The name of the policy.</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>The policy document.</p>
   *          <p>IAM stores policies in JSON format. However, resources that were created using AWS
   *          CloudFormation templates can be formatted in YAML. AWS CloudFormation always converts a
   *          YAML policy to JSON format before submitting it to IAM.</p>
   */
  PolicyDocument: string | undefined;
}

export namespace GetUserPolicyResponse {
  export const filterSensitiveLog = (obj: GetUserPolicyResponse): any => ({
    ...obj,
  });
}

export interface IamadminLoginRequest {
  /**
   * <p>Password</p>
   */
  Password?: string;
}

export namespace IamadminLoginRequest {
  export const filterSensitiveLog = (obj: IamadminLoginRequest): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING }),
  });
}

export interface IamadminLoginResponse {
  /**
   * <p>Login succeed or failed.</p>
   */
  Result: string | undefined;

  /**
   * <p>iamadmin</p>
   */
  Name?: string;

  /**
   * <p>AccessKey info.</p>
   */
  AccessKey?: AccessKey;
}

export namespace IamadminLoginResponse {
  export const filterSensitiveLog = (obj: IamadminLoginResponse): any => ({
    ...obj,
    ...(obj.AccessKey && { AccessKey: AccessKey.filterSensitiveLog(obj.AccessKey) }),
  });
}

export interface ListAccessKeysRequest {
  /**
   * <p>The name of the user.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName?: string;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;

  Type?: number;
  ResponseNeedSk?: boolean;
}

export namespace ListAccessKeysRequest {
  export const filterSensitiveLog = (obj: ListAccessKeysRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>ListAccessKeys</a> request.
 *     </p>
 */
export interface ListAccessKeysResponse {
  /**
   * <p>A list of objects containing metadata about the access keys.</p>
   */
  AccessKeyMetadata: AccessKeyMetadata[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListAccessKeysResponse {
  export const filterSensitiveLog = (obj: ListAccessKeysResponse): any => ({
    ...obj,
    ...(obj.AccessKeyMetadata && {
      AccessKeyMetadata: obj.AccessKeyMetadata.map((item) => AccessKeyMetadata.filterSensitiveLog(item)),
    }),
  });
}

export interface ListAccountAliasesRequest {
  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;
}

export namespace ListAccountAliasesRequest {
  export const filterSensitiveLog = (obj: ListAccountAliasesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>ListAccountAliases</a> request.
 *     </p>
 */
export interface ListAccountAliasesResponse {
  /**
   * <p>A list of aliases associated with the account. AWS supports only one alias per
   *          account.</p>
   */
  AccountAliases: string[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListAccountAliasesResponse {
  export const filterSensitiveLog = (obj: ListAccountAliasesResponse): any => ({
    ...obj,
  });
}

export interface ListAccountGroupsRequest {
  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;
}

export namespace ListAccountGroupsRequest {
  export const filterSensitiveLog = (obj: ListAccountGroupsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>ListAccounts</a> request.
 *     </p>
 */
export interface ListAccountGroupsResponse {
  /**
   * <p>A list of accounts.</p>
   */
  Groups: AccountGroupType[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListAccountGroupsResponse {
  export const filterSensitiveLog = (obj: ListAccountGroupsResponse): any => ({
    ...obj,
  });
}

export interface ListAccountsRequest {
  /**
   * <p>Show AK/SK, 0 means no, 1 means yes.</p>
   */
  ResponseNeedCert?: number;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  AccountNameMarker?: string;

  /**
   * <p>The maximum number of keys returned in the response body.</p>
   */
  MaxKeys?: number;

  /**
   * <p>Limits the response to keys that begin with the specified prefix.</p>
   */
  Prefix?: string;
}

export namespace ListAccountsRequest {
  export const filterSensitiveLog = (obj: ListAccountsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>ListAccounts</a> request.
 *     </p>
 */
export interface ListAccountsResponse {
  /**
   * <p>A list of accounts.</p>
   */
  Accounts: AccountType[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  NextAccountName?: string;
}

export namespace ListAccountsResponse {
  export const filterSensitiveLog = (obj: ListAccountsResponse): any => ({
    ...obj,
  });
}

export interface ListAttachedGroupPoliciesRequest {
  /**
   * <p>The name (friendly name, not ARN) of the group to list attached policies for.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The path prefix for filtering the results. This parameter is optional. If it is not
   *          included, it defaults to a slash (/), listing all policies.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  PathPrefix?: string;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;
}

export namespace ListAttachedGroupPoliciesRequest {
  export const filterSensitiveLog = (obj: ListAttachedGroupPoliciesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>ListAttachedGroupPolicies</a>
 *       request. </p>
 */
export interface ListAttachedGroupPoliciesResponse {
  /**
   * <p>A list of the attached policies.</p>
   */
  AttachedPolicies?: AttachedPolicy[];

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListAttachedGroupPoliciesResponse {
  export const filterSensitiveLog = (obj: ListAttachedGroupPoliciesResponse): any => ({
    ...obj,
  });
}

export interface ListAttachedRolePoliciesRequest {
  /**
   * <p>The name (friendly name, not ARN) of the role to list attached policies for.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  RoleName: string | undefined;

  /**
   * <p>The path prefix for filtering the results. This parameter is optional. If it is not
   *          included, it defaults to a slash (/), listing all policies.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  PathPrefix?: string;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;
}

export namespace ListAttachedRolePoliciesRequest {
  export const filterSensitiveLog = (obj: ListAttachedRolePoliciesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>ListAttachedRolePolicies</a>
 *       request. </p>
 */
export interface ListAttachedRolePoliciesResponse {
  /**
   * <p>A list of the attached policies.</p>
   */
  AttachedPolicies?: AttachedPolicy[];

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListAttachedRolePoliciesResponse {
  export const filterSensitiveLog = (obj: ListAttachedRolePoliciesResponse): any => ({
    ...obj,
  });
}

export interface ListAttachedUserPoliciesRequest {
  /**
   * <p>The name (friendly name, not ARN) of the user to list attached policies for.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;

  /**
   * <p>The path prefix for filtering the results. This parameter is optional. If it is not
   *          included, it defaults to a slash (/), listing all policies.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  PathPrefix?: string;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;
}

export namespace ListAttachedUserPoliciesRequest {
  export const filterSensitiveLog = (obj: ListAttachedUserPoliciesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>ListAttachedUserPolicies</a>
 *       request. </p>
 */
export interface ListAttachedUserPoliciesResponse {
  /**
   * <p>A list of the attached policies.</p>
   */
  AttachedPolicies?: AttachedPolicy[];

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListAttachedUserPoliciesResponse {
  export const filterSensitiveLog = (obj: ListAttachedUserPoliciesResponse): any => ({
    ...obj,
  });
}

export type PolicyUsageType = "PermissionsBoundary" | "PermissionsPolicy";

export interface ListEntitiesForPolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM policy for which you want the
   *          versions.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  PolicyArn: string | undefined;

  /**
   * <p>The entity type to use for filtering the results.</p>
   *          <p>For example, when <code>EntityFilter</code> is <code>Role</code>, only the roles that
   *          are attached to the specified policy are returned. This parameter is optional. If it is not
   *          included, all attached entities (users, groups, and roles) are returned. The argument for
   *          this parameter must be one of the valid values listed below.</p>
   */
  EntityFilter?: EntityType | string;

  /**
   * <p>The path prefix for filtering the results. This parameter is optional. If it is not
   *          included, it defaults to a slash (/), listing all entities.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  PathPrefix?: string;

  /**
   * <p>The policy usage method to use for filtering the results.</p>
   *          <p>To list only permissions policies,
   *             set <code>PolicyUsageFilter</code> to <code>PermissionsPolicy</code>. To list only the
   *          policies used to set permissions boundaries, set the value
   *             to <code>PermissionsBoundary</code>.</p>
   *          <p>This parameter is optional. If it is not included, all policies are returned. </p>
   */
  PolicyUsageFilter?: PolicyUsageType | string;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;
}

export namespace ListEntitiesForPolicyRequest {
  export const filterSensitiveLog = (obj: ListEntitiesForPolicyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a group that a managed policy is attached to.</p>
 *          <p>This data type is used as a response element in the <a>ListEntitiesForPolicy</a> operation. </p>
 *          <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline
 *             Policies</a> in the <i>IAM User Guide</i>. </p>
 */
export interface PolicyGroup {
  /**
   * <p>The name (friendly name, not ARN) identifying the group.</p>
   */
  GroupName?: string;

  /**
   * <p>The stable and unique string identifying the group. For more information about IDs, see
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM
   *             Identifiers</a> in the <i>IAM User Guide</i>.</p>
   */
  GroupId?: string;
}

export namespace PolicyGroup {
  export const filterSensitiveLog = (obj: PolicyGroup): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a role that a managed policy is attached to.</p>
 *          <p>This data type is used as a response element in the <a>ListEntitiesForPolicy</a> operation. </p>
 *          <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline
 *             Policies</a> in the <i>IAM User Guide</i>. </p>
 */
export interface PolicyRole {
  /**
   * <p>The name (friendly name, not ARN) identifying the role.</p>
   */
  RoleName?: string;

  /**
   * <p>The stable and unique string identifying the role. For more information about IDs, see
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM
   *             Identifiers</a> in the <i>IAM User Guide</i>.</p>
   */
  RoleId?: string;
}

export namespace PolicyRole {
  export const filterSensitiveLog = (obj: PolicyRole): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a user that a managed policy is attached to.</p>
 *          <p>This data type is used as a response element in the <a>ListEntitiesForPolicy</a> operation. </p>
 *          <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed Policies and Inline
 *             Policies</a> in the <i>IAM User Guide</i>. </p>
 */
export interface PolicyUser {
  /**
   * <p>The name (friendly name, not ARN) identifying the user.</p>
   */
  UserName?: string;

  /**
   * <p>The stable and unique string identifying the user. For more information about IDs, see
   *             <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM
   *             Identifiers</a> in the <i>IAM User Guide</i>.</p>
   */
  UserId?: string;
}

export namespace PolicyUser {
  export const filterSensitiveLog = (obj: PolicyUser): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>ListEntitiesForPolicy</a> request.
 *     </p>
 */
export interface ListEntitiesForPolicyResponse {
  /**
   * <p>A list of IAM groups that the policy is attached to.</p>
   */
  PolicyGroups?: PolicyGroup[];

  /**
   * <p>A list of IAM users that the policy is attached to.</p>
   */
  PolicyUsers?: PolicyUser[];

  /**
   * <p>A list of IAM roles that the policy is attached to.</p>
   */
  PolicyRoles?: PolicyRole[];

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListEntitiesForPolicyResponse {
  export const filterSensitiveLog = (obj: ListEntitiesForPolicyResponse): any => ({
    ...obj,
  });
}

export interface ListGroupPoliciesRequest {
  /**
   * <p>The name of the group to list policies for.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  GroupName: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;
}

export namespace ListGroupPoliciesRequest {
  export const filterSensitiveLog = (obj: ListGroupPoliciesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>ListGroupPolicies</a> request.
 *     </p>
 */
export interface ListGroupPoliciesResponse {
  /**
   * <p>A list of policy names.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  PolicyNames: string[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListGroupPoliciesResponse {
  export const filterSensitiveLog = (obj: ListGroupPoliciesResponse): any => ({
    ...obj,
  });
}

export interface ListGroupsRequest {
  /**
   * <p> The path prefix for filtering the results. For example, the prefix
   *             <code>/division_abc/subdivision_xyz/</code> gets all groups whose path starts with
   *             <code>/division_abc/subdivision_xyz/</code>.</p>
   *          <p>This parameter is optional. If it is not included, it defaults to a slash (/), listing
   *          all groups. This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  PathPrefix?: string;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;
}

export namespace ListGroupsRequest {
  export const filterSensitiveLog = (obj: ListGroupsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>ListGroups</a> request. </p>
 */
export interface ListGroupsResponse {
  /**
   * <p>A list of groups.</p>
   */
  Groups: Group[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListGroupsResponse {
  export const filterSensitiveLog = (obj: ListGroupsResponse): any => ({
    ...obj,
  });
}

export interface ListGroupsForUserRequest {
  /**
   * <p>The name of the user to list groups for.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;
}

export namespace ListGroupsForUserRequest {
  export const filterSensitiveLog = (obj: ListGroupsForUserRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>ListGroupsForUser</a> request.
 *     </p>
 */
export interface ListGroupsForUserResponse {
  /**
   * <p>A list of groups.</p>
   */
  Groups: Group[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListGroupsForUserResponse {
  export const filterSensitiveLog = (obj: ListGroupsForUserResponse): any => ({
    ...obj,
  });
}

export interface ListInstanceProfilesRequest {
  /**
   * <p> The path prefix for filtering the results. For example, the prefix
   *             <code>/application_abc/component_xyz/</code> gets all instance profiles whose path
   *          starts with <code>/application_abc/component_xyz/</code>.</p>
   *          <p>This parameter is optional. If it is not included, it defaults to a slash (/), listing
   *          all instance profiles. This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  PathPrefix?: string;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;
}

export namespace ListInstanceProfilesRequest {
  export const filterSensitiveLog = (obj: ListInstanceProfilesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>ListInstanceProfiles</a> request.
 *     </p>
 */
export interface ListInstanceProfilesResponse {
  /**
   * <p>A list of instance profiles.</p>
   */
  InstanceProfiles: InstanceProfile[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListInstanceProfilesResponse {
  export const filterSensitiveLog = (obj: ListInstanceProfilesResponse): any => ({
    ...obj,
  });
}

export interface ListInstanceProfilesForRoleRequest {
  /**
   * <p>The name of the role to list instance profiles for.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  RoleName: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;
}

export namespace ListInstanceProfilesForRoleRequest {
  export const filterSensitiveLog = (obj: ListInstanceProfilesForRoleRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>ListInstanceProfilesForRole</a>
 *       request. </p>
 */
export interface ListInstanceProfilesForRoleResponse {
  /**
   * <p>A list of instance profiles.</p>
   */
  InstanceProfiles: InstanceProfile[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListInstanceProfilesForRoleResponse {
  export const filterSensitiveLog = (obj: ListInstanceProfilesForRoleResponse): any => ({
    ...obj,
  });
}

export interface ListMFADevicesRequest {
  /**
   * <p>The name of the user whose MFA devices you want to list.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName?: string;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;
}

export namespace ListMFADevicesRequest {
  export const filterSensitiveLog = (obj: ListMFADevicesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about an MFA device.</p>
 *          <p>This data type is used as a response element in the <a>ListMFADevices</a>
 *          operation.</p>
 */
export interface MFADevice {
  /**
   * <p>The user with whom the MFA device is associated.</p>
   */
  UserName: string | undefined;

  /**
   * <p>The serial number that uniquely identifies the MFA device. For virtual MFA devices, the
   *          serial number is the device ARN.</p>
   */
  SerialNumber: string | undefined;

  /**
   * <p>The date when the MFA device was enabled for the user.</p>
   */
  EnableDate: Date | undefined;
}

export namespace MFADevice {
  export const filterSensitiveLog = (obj: MFADevice): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>ListMFADevices</a> request.
 *     </p>
 */
export interface ListMFADevicesResponse {
  /**
   * <p>A list of MFA devices.</p>
   */
  MFADevices: MFADevice[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListMFADevicesResponse {
  export const filterSensitiveLog = (obj: ListMFADevicesResponse): any => ({
    ...obj,
  });
}

export interface ListOpenIDConnectProvidersRequest {}

export namespace ListOpenIDConnectProvidersRequest {
  export const filterSensitiveLog = (obj: ListOpenIDConnectProvidersRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the Amazon Resource Name (ARN) for an IAM OpenID Connect provider.</p>
 */
export interface OpenIDConnectProviderListEntry {
  /**
   * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p>
   *          <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS
   *             Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
   */
  Arn?: string;
}

export namespace OpenIDConnectProviderListEntry {
  export const filterSensitiveLog = (obj: OpenIDConnectProviderListEntry): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>ListOpenIDConnectProviders</a>
 *       request. </p>
 */
export interface ListOpenIDConnectProvidersResponse {
  /**
   * <p>The list of IAM OIDC provider resource objects defined in the AWS account.</p>
   */
  OpenIDConnectProviderList?: OpenIDConnectProviderListEntry[];
}

export namespace ListOpenIDConnectProvidersResponse {
  export const filterSensitiveLog = (obj: ListOpenIDConnectProvidersResponse): any => ({
    ...obj,
  });
}

export enum PolicyScopeType {
  AWS = "AWS",
  All = "All",
  Local = "Local",
}

export interface ListPoliciesRequest {
  /**
   * <p>The scope to use for filtering the results.</p>
   *          <p>To list only AWS managed policies, set <code>Scope</code> to <code>AWS</code>. To list
   *          only the customer managed policies in your AWS account, set <code>Scope</code> to
   *             <code>Local</code>.</p>
   *          <p>This parameter is optional. If it is not included, or if it is set to <code>All</code>,
   *          all policies are returned.</p>
   */
  Scope?: PolicyScopeType | string;

  /**
   * <p>A flag to filter the results to only the attached policies.</p>
   *          <p>When <code>OnlyAttached</code> is <code>true</code>, the returned list contains only the
   *          policies that are attached to an IAM user, group, or role. When <code>OnlyAttached</code>
   *          is <code>false</code>, or when the parameter is not included, all policies are
   *          returned.</p>
   */
  OnlyAttached?: boolean;

  /**
   * <p>The path prefix for filtering the results. This parameter is optional. If it is not
   *          included, it defaults to a slash (/), listing all policies. This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  PathPrefix?: string;

  /**
   * <p>The policy usage method to use for filtering the results.</p>
   *          <p>To list only permissions policies,
   *             set <code>PolicyUsageFilter</code> to <code>PermissionsPolicy</code>. To list only the
   *          policies used to set permissions boundaries, set the value
   *             to <code>PermissionsBoundary</code>.</p>
   *          <p>This parameter is optional. If it is not included, all policies are returned. </p>
   */
  PolicyUsageFilter?: PolicyUsageType | string;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;
}

export namespace ListPoliciesRequest {
  export const filterSensitiveLog = (obj: ListPoliciesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>ListPolicies</a> request.
 *     </p>
 */
export interface ListPoliciesResponse {
  /**
   * <p>A list of policies.</p>
   */
  Policies?: Policy[];

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListPoliciesResponse {
  export const filterSensitiveLog = (obj: ListPoliciesResponse): any => ({
    ...obj,
  });
}

export interface ListPoliciesGrantingServiceAccessRequest {
  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>The ARN of the IAM identity (user, group, or role) whose policies you want to
   *          list.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The service namespace for the AWS services whose policies you want to list.</p>
   *          <p>To learn the service namespace for a service, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_actions-resources-contextkeys.html">Actions,
   *             Resources, and Condition Keys for AWS Services</a> in the
   *             <i>IAM User Guide</i>. Choose the name of the service to view details
   *          for that service. In the first paragraph, find the service prefix. For example,
   *             <code>(service prefix: a4b)</code>. For more information about service namespaces, see
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">AWS
   *             Service Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  ServiceNamespaces: string[] | undefined;
}

export namespace ListPoliciesGrantingServiceAccessRequest {
  export const filterSensitiveLog = (obj: ListPoliciesGrantingServiceAccessRequest): any => ({
    ...obj,
  });
}

export enum PolicyType {
  INLINE = "INLINE",
  MANAGED = "MANAGED",
}

/**
 * <p>Contains details about the permissions policies that are attached to the specified
 *          identity (user, group, or role).</p>
 *          <p>This data type is an element of the <a>ListPoliciesGrantingServiceAccessEntry</a> object.</p>
 */
export interface PolicyGrantingServiceAccess {
  /**
   * <p>The policy name.</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>The policy type. For more information about these policy types, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html">Managed
   *             Policies and Inline Policies</a> in the
   *          <i>IAM User Guide</i>.</p>
   */
  PolicyType: PolicyType | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for AWS resources.</p>
   *          <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS
   *             Service Namespaces</a> in the <i>AWS General Reference</i>. </p>
   */
  PolicyArn?: string;

  /**
   * <p>The type of entity (user or role) that used the policy to access the service to which
   *          the inline policy is attached.</p>
   *          <p>This field is null for managed policies. For more information about these policy types,
   *          see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html">Managed Policies and Inline Policies</a> in the
   *             <i>IAM User Guide</i>.</p>
   */
  EntityType?: PolicyOwnerEntityType | string;

  /**
   * <p>The name of the entity (user or role) to which the inline policy is attached.</p>
   *          <p>This field is null for managed policies. For more information about these policy types,
   *          see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_managed-vs-inline.html">Managed Policies and Inline Policies</a> in the
   *             <i>IAM User Guide</i>.</p>
   */
  EntityName?: string;
}

export namespace PolicyGrantingServiceAccess {
  export const filterSensitiveLog = (obj: PolicyGrantingServiceAccess): any => ({
    ...obj,
  });
}

/**
 * <p>Contains details about the permissions policies that are attached to the specified
 *          identity (user, group, or role).</p>
 *          <p>This data type is used as a response element in the <a>ListPoliciesGrantingServiceAccess</a> operation.</p>
 */
export interface ListPoliciesGrantingServiceAccessEntry {
  /**
   * <p>The namespace of the service that was accessed.</p>
   *          <p>To learn the service namespace of a service, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_actions-resources-contextkeys.html">Actions,
   *             Resources, and Condition Keys for AWS Services</a> in the
   *             <i>IAM User Guide</i>. Choose the name of the service to view details
   *          for that service. In the first paragraph, find the service prefix. For example,
   *             <code>(service prefix: a4b)</code>. For more information about service namespaces, see
   *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html#genref-aws-service-namespaces">AWS
   *             Service Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  ServiceNamespace?: string;

  /**
   * <p>The <code>PoliciesGrantingServiceAccess</code> object that contains details about the
   *          policy.</p>
   */
  Policies?: PolicyGrantingServiceAccess[];
}

export namespace ListPoliciesGrantingServiceAccessEntry {
  export const filterSensitiveLog = (obj: ListPoliciesGrantingServiceAccessEntry): any => ({
    ...obj,
  });
}

export interface ListPoliciesGrantingServiceAccessResponse {
  /**
   * <p>A <code>ListPoliciesGrantingServiceAccess</code> object that contains details about the
   *          permissions policies attached to the specified identity (user, group, or role).</p>
   */
  PoliciesGrantingServiceAccess: ListPoliciesGrantingServiceAccessEntry[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your results were
   *          truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *          request parameter to retrieve more items. We recommend that you check
   *             <code>IsTruncated</code> after every call to ensure that you receive all your
   *          results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListPoliciesGrantingServiceAccessResponse {
  export const filterSensitiveLog = (obj: ListPoliciesGrantingServiceAccessResponse): any => ({
    ...obj,
  });
}

export interface ListPolicyVersionsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM policy for which you want the
   *          versions.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  PolicyArn: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;
}

export namespace ListPolicyVersionsRequest {
  export const filterSensitiveLog = (obj: ListPolicyVersionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>ListPolicyVersions</a> request.
 *     </p>
 */
export interface ListPolicyVersionsResponse {
  /**
   * <p>A list of policy versions.</p>
   *          <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for Managed
   *             Policies</a> in the <i>IAM User Guide</i>.</p>
   */
  Versions?: PolicyVersion[];

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListPolicyVersionsResponse {
  export const filterSensitiveLog = (obj: ListPolicyVersionsResponse): any => ({
    ...obj,
  });
}

export interface ListRolePoliciesRequest {
  /**
   * <p>The name of the role to list policies for.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  RoleName: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;
}

export namespace ListRolePoliciesRequest {
  export const filterSensitiveLog = (obj: ListRolePoliciesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>ListRolePolicies</a> request.
 *     </p>
 */
export interface ListRolePoliciesResponse {
  /**
   * <p>A list of policy names.</p>
   */
  PolicyNames: string[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListRolePoliciesResponse {
  export const filterSensitiveLog = (obj: ListRolePoliciesResponse): any => ({
    ...obj,
  });
}

export interface ListRolesRequest {
  /**
   * <p> The path prefix for filtering the results. For example, the prefix
   *             <code>/application_abc/component_xyz/</code> gets all roles whose path starts with
   *             <code>/application_abc/component_xyz/</code>.</p>
   *          <p>This parameter is optional. If it is not included, it defaults to a slash (/), listing
   *          all roles. This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  PathPrefix?: string;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;
}

export namespace ListRolesRequest {
  export const filterSensitiveLog = (obj: ListRolesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>ListRoles</a> request. </p>
 */
export interface ListRolesResponse {
  /**
   * <p>A list of roles.</p>
   */
  Roles: Role[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListRolesResponse {
  export const filterSensitiveLog = (obj: ListRolesResponse): any => ({
    ...obj,
  });
}

export interface ListRoleTagsRequest {
  /**
   * <p>The name of the IAM role for which you want to see the list of tags.</p>
   *          <p>This parameter accepts (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that consist of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  RoleName: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>(Optional) Use this only when paginating results to indicate the
   *     maximum number of items that you want in the response. If additional items exist beyond the maximum that you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, it defaults to 100. Note that
   *     IAM might return fewer results, even when more results are available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;
}

export namespace ListRoleTagsRequest {
  export const filterSensitiveLog = (obj: ListRoleTagsRequest): any => ({
    ...obj,
  });
}

export interface ListRoleTagsResponse {
  /**
   * <p>The list of tags currently that is attached to the role. Each tag consists of a key
   *       name and an associated value. If no tags are attached to the specified role, the response
   *       contains an empty list.</p>
   */
  Tags: Tag[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can use the <code>Marker</code> request parameter to make a subsequent pagination request that retrieves more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when more results are available. Check <code>IsTruncated</code> after every call to ensure that you receive all of your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListRoleTagsResponse {
  export const filterSensitiveLog = (obj: ListRoleTagsResponse): any => ({
    ...obj,
  });
}

export interface ListSAMLProvidersRequest {}

export namespace ListSAMLProvidersRequest {
  export const filterSensitiveLog = (obj: ListSAMLProvidersRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the list of SAML providers for this account.</p>
 */
export interface SAMLProviderListEntry {
  /**
   * <p>The Amazon Resource Name (ARN) of the SAML provider.</p>
   */
  Arn?: string;

  /**
   * <p>The expiration date and time for the SAML provider.</p>
   */
  ValidUntil?: Date;

  /**
   * <p>The date and time when the SAML provider was created.</p>
   */
  CreateDate?: Date;
}

export namespace SAMLProviderListEntry {
  export const filterSensitiveLog = (obj: SAMLProviderListEntry): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>ListSAMLProviders</a> request.
 *     </p>
 */
export interface ListSAMLProvidersResponse {
  /**
   * <p>The list of SAML provider resource objects defined in IAM for this AWS
   *          account.</p>
   */
  SAMLProviderList?: SAMLProviderListEntry[];
}

export namespace ListSAMLProvidersResponse {
  export const filterSensitiveLog = (obj: ListSAMLProvidersResponse): any => ({
    ...obj,
  });
}

export interface ListServerCertificatesRequest {
  /**
   * <p> The path prefix for filtering the results. For example:
   *             <code>/company/servercerts</code> would get all server certificates for which the path
   *          starts with <code>/company/servercerts</code>.</p>
   *          <p>This parameter is optional. If it is not included, it defaults to a slash (/), listing
   *          all server certificates. This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  PathPrefix?: string;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;
}

export namespace ListServerCertificatesRequest {
  export const filterSensitiveLog = (obj: ListServerCertificatesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>ListServerCertificates</a> request.
 *     </p>
 */
export interface ListServerCertificatesResponse {
  /**
   * <p>A list of server certificates.</p>
   */
  ServerCertificateMetadataList: ServerCertificateMetadata[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListServerCertificatesResponse {
  export const filterSensitiveLog = (obj: ListServerCertificatesResponse): any => ({
    ...obj,
  });
}

export interface ListServiceSpecificCredentialsRequest {
  /**
   * <p>The name of the user whose service-specific credentials you want information about. If
   *          this value is not specified, then the operation assumes the user whose credentials are used
   *          to call the operation.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName?: string;

  /**
   * <p>Filters the returned results to only those for the specified AWS service. If not
   *          specified, then AWS returns service-specific credentials for all services.</p>
   */
  ServiceName?: string;
}

export namespace ListServiceSpecificCredentialsRequest {
  export const filterSensitiveLog = (obj: ListServiceSpecificCredentialsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains additional details about a service-specific credential.</p>
 */
export interface ServiceSpecificCredentialMetadata {
  /**
   * <p>The name of the IAM user associated with the service-specific credential.</p>
   */
  UserName: string | undefined;

  /**
   * <p>The status of the service-specific credential. <code>Active</code> means that the key is
   *          valid for API calls, while <code>Inactive</code> means it is not.</p>
   */
  Status: StatusType | string | undefined;

  /**
   * <p>The generated user name for the service-specific credential.</p>
   */
  ServiceUserName: string | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the service-specific credential were created.</p>
   */
  CreateDate: Date | undefined;

  /**
   * <p>The unique identifier for the service-specific credential.</p>
   */
  ServiceSpecificCredentialId: string | undefined;

  /**
   * <p>The name of the service associated with the service-specific credential.</p>
   */
  ServiceName: string | undefined;
}

export namespace ServiceSpecificCredentialMetadata {
  export const filterSensitiveLog = (obj: ServiceSpecificCredentialMetadata): any => ({
    ...obj,
  });
}

export interface ListServiceSpecificCredentialsResponse {
  /**
   * <p>A list of structures that each contain details about a service-specific
   *          credential.</p>
   */
  ServiceSpecificCredentials?: ServiceSpecificCredentialMetadata[];
}

export namespace ListServiceSpecificCredentialsResponse {
  export const filterSensitiveLog = (obj: ListServiceSpecificCredentialsResponse): any => ({
    ...obj,
  });
}

export interface ListSigningCertificatesRequest {
  /**
   * <p>The name of the IAM user whose signing certificates you want to examine.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName?: string;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;
}

export namespace ListSigningCertificatesRequest {
  export const filterSensitiveLog = (obj: ListSigningCertificatesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about an X.509 signing certificate.</p>
 *          <p>This data type is used as a response element in the <a>UploadSigningCertificate</a> and <a>ListSigningCertificates</a>
 *          operations. </p>
 */
export interface SigningCertificate {
  /**
   * <p>The name of the user the signing certificate is associated with.</p>
   */
  UserName: string | undefined;

  /**
   * <p>The ID for the signing certificate.</p>
   */
  CertificateId: string | undefined;

  /**
   * <p>The contents of the signing certificate.</p>
   */
  CertificateBody: string | undefined;

  /**
   * <p>The status of the signing certificate. <code>Active</code> means that the key is valid
   *          for API calls, while <code>Inactive</code> means it is not.</p>
   */
  Status: StatusType | string | undefined;

  /**
   * <p>The date when the signing certificate was uploaded.</p>
   */
  UploadDate?: Date;
}

export namespace SigningCertificate {
  export const filterSensitiveLog = (obj: SigningCertificate): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>ListSigningCertificates</a>
 *       request. </p>
 */
export interface ListSigningCertificatesResponse {
  /**
   * <p>A list of the user's signing certificate information.</p>
   */
  Certificates: SigningCertificate[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListSigningCertificatesResponse {
  export const filterSensitiveLog = (obj: ListSigningCertificatesResponse): any => ({
    ...obj,
  });
}

export interface ListSSHPublicKeysRequest {
  /**
   * <p>The name of the IAM user to list SSH public keys for. If none is specified, the
   *             <code>UserName</code> field is determined implicitly based on the AWS access key used
   *          to sign the request.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName?: string;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;
}

export namespace ListSSHPublicKeysRequest {
  export const filterSensitiveLog = (obj: ListSSHPublicKeysRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about an SSH public key, without the key's body or
 *          fingerprint.</p>
 *          <p>This data type is used as a response element in the <a>ListSSHPublicKeys</a>
 *          operation.</p>
 */
export interface SSHPublicKeyMetadata {
  /**
   * <p>The name of the IAM user associated with the SSH public key.</p>
   */
  UserName: string | undefined;

  /**
   * <p>The unique identifier for the SSH public key.</p>
   */
  SSHPublicKeyId: string | undefined;

  /**
   * <p>The status of the SSH public key. <code>Active</code> means that the key can be used for
   *          authentication with an AWS CodeCommit repository. <code>Inactive</code> means that the key
   *          cannot be used.</p>
   */
  Status: StatusType | string | undefined;

  /**
   * <p>The date and time, in <a href="http://www.iso.org/iso/iso8601">ISO 8601 date-time
   *             format</a>, when the SSH public key was uploaded.</p>
   */
  UploadDate: Date | undefined;
}

export namespace SSHPublicKeyMetadata {
  export const filterSensitiveLog = (obj: SSHPublicKeyMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>ListSSHPublicKeys</a>
 *       request.</p>
 */
export interface ListSSHPublicKeysResponse {
  /**
   * <p>A list of the SSH public keys assigned to IAM user.</p>
   */
  SSHPublicKeys?: SSHPublicKeyMetadata[];

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListSSHPublicKeysResponse {
  export const filterSensitiveLog = (obj: ListSSHPublicKeysResponse): any => ({
    ...obj,
  });
}

export interface ListUserPoliciesRequest {
  /**
   * <p>The name of the user to list policies for.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;
}

export namespace ListUserPoliciesRequest {
  export const filterSensitiveLog = (obj: ListUserPoliciesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>ListUserPolicies</a> request.
 *     </p>
 */
export interface ListUserPoliciesResponse {
  /**
   * <p>A list of policy names.</p>
   */
  PolicyNames: string[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListUserPoliciesResponse {
  export const filterSensitiveLog = (obj: ListUserPoliciesResponse): any => ({
    ...obj,
  });
}

export interface ListUsersRequest {
  /**
   * <p> The path prefix for filtering the results. For example:
   *             <code>/division_abc/subdivision_xyz/</code>, which would get all user names whose path
   *          starts with <code>/division_abc/subdivision_xyz/</code>.</p>
   *          <p>This parameter is optional. If it is not included, it defaults to a slash (/), listing
   *          all user names. This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting
   *     of either a forward slash (/) by itself or a string that must begin and end with forward slashes.
   *     In addition, it can contain any ASCII character from the ! (<code>\u0021</code>) through the DEL character (<code>\u007F</code>), including
   *     most punctuation characters, digits, and upper and lowercased letters.</p>
   */
  PathPrefix?: string;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;
}

export namespace ListUsersRequest {
  export const filterSensitiveLog = (obj: ListUsersRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>ListUsers</a> request. </p>
 */
export interface ListUsersResponse {
  /**
   * <p>A list of users.</p>
   */
  Users: User[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListUsersResponse {
  export const filterSensitiveLog = (obj: ListUsersResponse): any => ({
    ...obj,
  });
}

export interface ListUserTagsRequest {
  /**
   * <p>The name of the IAM user whose tags you want to see.</p>
   *          <p>This parameter accepts (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that consist of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: =,.@-</p>
   */
  UserName: string | undefined;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>(Optional) Use this only when paginating results to indicate the
   *     maximum number of items that you want in the response. If additional items exist beyond the maximum that you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, it defaults to 100. Note that
   *     IAM might return fewer results, even when more results are available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;
}

export namespace ListUserTagsRequest {
  export const filterSensitiveLog = (obj: ListUserTagsRequest): any => ({
    ...obj,
  });
}

export interface ListUserTagsResponse {
  /**
   * <p>The list of tags that are currently attached to the user. Each tag consists of a key
   *       name and an associated value. If no tags are attached to the specified user, the response
   *       contains an empty list.</p>
   */
  Tags: Tag[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can use the <code>Marker</code> request parameter to make a subsequent pagination request that retrieves more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when more results are available. Check <code>IsTruncated</code> after every call to ensure that you receive all of your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element
   *     is present and contains the value to use for the <code>Marker</code> parameter in a subsequent
   *     pagination request.</p>
   */
  Marker?: string;
}

export namespace ListUserTagsResponse {
  export const filterSensitiveLog = (obj: ListUserTagsResponse): any => ({
    ...obj,
  });
}

export interface ListVirtualMFADevicesRequest {
  /**
   * <p> The status (<code>Unassigned</code> or <code>Assigned</code>) of the devices to list.
   *          If you do not specify an <code>AssignmentStatus</code>, the operation defaults to
   *             <code>Any</code>, which lists both assigned and unassigned virtual MFA devices.,</p>
   */
  AssignmentStatus?: AssignmentStatusType | string;

  /**
   * <p>Use this parameter only when paginating results and only after
   *     you receive a response indicating that the results are truncated. Set it to the value of the
   *     <code>Marker</code> element in the response that you received to indicate where the next call
   *     should start.</p>
   */
  Marker?: string;

  /**
   * <p>Use this only when paginating results to indicate the
   *     maximum number of items you want in the response. If additional items exist beyond the maximum
   *     you specify, the <code>IsTruncated</code> response element is <code>true</code>.</p>
   *          <p>If you do not include this parameter, the number of items defaults to 100. Note that
   *     IAM might return fewer results, even when there are more results available. In that case, the
   *     <code>IsTruncated</code> response element returns <code>true</code>, and <code>Marker</code>
   *     contains a value to include in the subsequent call that tells the service where to continue
   *     from.</p>
   */
  MaxItems?: number;
}

export namespace ListVirtualMFADevicesRequest {
  export const filterSensitiveLog = (obj: ListVirtualMFADevicesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the response to a successful <a>ListVirtualMFADevices</a> request.
 *     </p>
 */
export interface ListVirtualMFADevicesResponse {
  /**
   * <p> The list of virtual MFA devices in the current account that match the
   *             <code>AssignmentStatus</code> value that was passed in the request.</p>
   */
  VirtualMFADevices: VirtualMFADevice[] | undefined;

  /**
   * <p>A flag that indicates whether there are more items to return. If your
   *     results were truncated, you can make a subsequent pagination request using the <code>Marker</code>
   *     request parameter to retrieve more items. Note that IAM might return fewer than the
   *     <code>MaxItems</code> number of results even when there are more results available. We recommend
   *     that you check <code>IsTruncated</code> after every call to ensure that you receive all your
   *     results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>When <code>IsTruncated</code> is <code>true</code>, this element is present and contains
   *          the value to use for the <code>Marker</code> parameter in a subsequent pagination
   *          request.</p>
   */
  Marker?: string;
}

export namespace ListVirtualMFADevicesResponse {
  export const filterSensitiveLog = (obj: ListVirtualMFADevicesResponse): any => ({
    ...obj,
    ...(obj.VirtualMFADevices && {
      VirtualMFADevices: obj.VirtualMFADevices.map((item) => VirtualMFADevice.filterSensitiveLog(item)),
    }),
  });
}

export interface LoginConsoleRequest {
  /**
   * <p>1 means account; 2 means user; 3 means email</p>
   */
  LoginType: number | undefined;

  /**
   * <p>Account name, required when LoginType is 1.</p>
   */
  AccountName?: string;

  /**
   * <p>User name, required when LoginType is 2.</p>
   */
  UserName?: string;

  /**
   * <p>User name, required when LoginType is 2.</p>
   */
  Email?: string;

  /**
   * <p>Password</p>
   */
  Password: string | undefined;
}

export namespace LoginConsoleRequest {
  export const filterSensitiveLog = (obj: LoginConsoleRequest): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING }),
  });
}

export interface LoginConsoleResponse {
  /**
   * <p>Login succeed or failed.</p>
   */
  Result: string | undefined;

  /**
   * <p>0 means no need update, 1 means need update.</p>
   */
  NeedUpdatePassword?: number;

  /**
   * <p>Account info.</p>
   */
  Account?: AccountType;

  /**
   * <p>AccessKey info.</p>
   */
  AccessKey?: AccessKey;
}

export namespace LoginConsoleResponse {
  export const filterSensitiveLog = (obj: LoginConsoleResponse): any => ({
    ...obj,
    ...(obj.Account && { Account: AccountType.filterSensitiveLog(obj.Account) }),
    ...(obj.AccessKey && { AccessKey: AccessKey.filterSensitiveLog(obj.AccessKey) }),
  });
}

export interface PutAccountQosRequest {
  /**
   * <p>Account name.</p>
   */
  AccountName?: string;

  /**
   * <p>The ReadOps of the account.</p>
   */
  ReadOps?: string;

  /**
   * <p>The WriteOps of the account.</p>
   */
  WriteOps?: string;

  /**
   * <p>The ReadBandwidth of the account.</p>
   */
  ReadBandwidth?: string;

  /**
   * <p>The WriteBandwidth of the account.</p>
   */
  WriteBandwidth?: string;
}

export namespace PutAccountQosRequest {
  export const filterSensitiveLog = (obj: PutAccountQosRequest): any => ({
    ...obj,
  });
}

export interface PutGroupPolicyRequest {
  /**
   * <p>The name of the group to associate the policy with.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-.</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The name of the policy document.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>The policy document.</p>
   *          <p>You must provide policies in JSON format in IAM. However, for AWS CloudFormation
   *          templates formatted in YAML, you can provide the policy in JSON or YAML format. AWS
   *          CloudFormation always converts a YAML policy to JSON format before submitting it to
   *          IAM.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   */
  PolicyDocument: string | undefined;
}

export namespace PutGroupPolicyRequest {
  export const filterSensitiveLog = (obj: PutGroupPolicyRequest): any => ({
    ...obj,
  });
}

export interface PutRolePermissionsBoundaryRequest {
  /**
   * <p>The name (friendly name, not ARN) of the IAM role for which you want to set the
   *          permissions boundary.</p>
   */
  RoleName: string | undefined;

  /**
   * <p>The ARN of the policy that is used to set the permissions boundary for the role.</p>
   */
  PermissionsBoundary: string | undefined;
}

export namespace PutRolePermissionsBoundaryRequest {
  export const filterSensitiveLog = (obj: PutRolePermissionsBoundaryRequest): any => ({
    ...obj,
  });
}

export interface PutRolePolicyRequest {
  /**
   * <p>The name of the role to associate the policy with.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  RoleName: string | undefined;

  /**
   * <p>The name of the policy document.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>The policy document.</p>
   *          <p>You must provide policies in JSON format in IAM. However, for AWS CloudFormation
   *          templates formatted in YAML, you can provide the policy in JSON or YAML format. AWS
   *          CloudFormation always converts a YAML policy to JSON format before submitting it to
   *          IAM.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   */
  PolicyDocument: string | undefined;
}

export namespace PutRolePolicyRequest {
  export const filterSensitiveLog = (obj: PutRolePolicyRequest): any => ({
    ...obj,
  });
}

export interface PutUserPermissionsBoundaryRequest {
  /**
   * <p>The name (friendly name, not ARN) of the IAM user for which you want to set the
   *          permissions boundary.</p>
   */
  UserName: string | undefined;

  /**
   * <p>The ARN of the policy that is used to set the permissions boundary for the user.</p>
   */
  PermissionsBoundary: string | undefined;
}

export namespace PutUserPermissionsBoundaryRequest {
  export const filterSensitiveLog = (obj: PutUserPermissionsBoundaryRequest): any => ({
    ...obj,
  });
}

export interface PutUserPolicyRequest {
  /**
   * <p>The name of the user to associate the policy with.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;

  /**
   * <p>The name of the policy document.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>The policy document.</p>
   *          <p>You must provide policies in JSON format in IAM. However, for AWS CloudFormation
   *          templates formatted in YAML, you can provide the policy in JSON or YAML format. AWS
   *          CloudFormation always converts a YAML policy to JSON format before submitting it to
   *          IAM.</p>
   *          <p>The <a href="http://wikipedia.org/wiki/regex">regex pattern</a>
   *     used to validate this parameter is a string of characters consisting of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Any printable ASCII
   *     character ranging from the space character (<code>\u0020</code>) through the end of the ASCII character range</p>
   *             </li>
   *             <li>
   *                <p>The printable characters in the Basic Latin and  Latin-1 Supplement character set
   *     (through <code>\u00FF</code>)</p>
   *             </li>
   *             <li>
   *                <p>The special characters tab (<code>\u0009</code>), line feed (<code>\u000A</code>), and
   *     carriage return (<code>\u000D</code>)</p>
   *             </li>
   *          </ul>
   */
  PolicyDocument: string | undefined;
}

export namespace PutUserPolicyRequest {
  export const filterSensitiveLog = (obj: PutUserPolicyRequest): any => ({
    ...obj,
  });
}

export interface RemoveAccountFromGroupRequest {
  /**
   * <p>Account group name.</p>
   */
  GroupName?: string;

  /**
   * <p>Account name.</p>
   */
  AccountName?: string;
}

export namespace RemoveAccountFromGroupRequest {
  export const filterSensitiveLog = (obj: RemoveAccountFromGroupRequest): any => ({
    ...obj,
  });
}

export interface RemoveClientIDFromOpenIDConnectProviderRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM OIDC provider resource to remove the client
   *          ID from. You can get a list of OIDC provider ARNs by using the <a>ListOpenIDConnectProviders</a> operation.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  OpenIDConnectProviderArn: string | undefined;

  /**
   * <p>The client ID (also known as audience) to remove from the IAM OIDC provider resource.
   *          For more information about client IDs, see <a>CreateOpenIDConnectProvider</a>.</p>
   */
  ClientID: string | undefined;
}

export namespace RemoveClientIDFromOpenIDConnectProviderRequest {
  export const filterSensitiveLog = (obj: RemoveClientIDFromOpenIDConnectProviderRequest): any => ({
    ...obj,
  });
}

export interface RemoveRoleFromInstanceProfileRequest {
  /**
   * <p>The name of the instance profile to update.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  InstanceProfileName: string | undefined;

  /**
   * <p>The name of the role to remove.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  RoleName: string | undefined;
}

export namespace RemoveRoleFromInstanceProfileRequest {
  export const filterSensitiveLog = (obj: RemoveRoleFromInstanceProfileRequest): any => ({
    ...obj,
  });
}

export interface RemoveUserFromGroupRequest {
  /**
   * <p>The name of the group to update.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  GroupName: string | undefined;

  /**
   * <p>The name of the user to remove.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;
}

export namespace RemoveUserFromGroupRequest {
  export const filterSensitiveLog = (obj: RemoveUserFromGroupRequest): any => ({
    ...obj,
  });
}

export interface ResetAccountPasswordRequest {
  /**
   * <p>Account name.</p>
   */
  AccountName: string | undefined;

  /**
   * <p>The new password.</p>
   */
  NewPassword?: string;

  /**
   * <p>First login is update password, 0 means no, 1 means yes.</p>
   */
  FirstLoginUpdatePassword?: number;
}

export namespace ResetAccountPasswordRequest {
  export const filterSensitiveLog = (obj: ResetAccountPasswordRequest): any => ({
    ...obj,
    ...(obj.NewPassword && { NewPassword: SENSITIVE_STRING }),
  });
}

export interface ResetServiceSpecificCredentialRequest {
  /**
   * <p>The name of the IAM user associated with the service-specific credential. If this
   *          value is not specified, then the operation assumes the user whose credentials are used to
   *          call the operation.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName?: string;

  /**
   * <p>The unique identifier of the service-specific credential.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters that can
   *     consist of any upper or lowercased letter or digit.</p>
   */
  ServiceSpecificCredentialId: string | undefined;
}

export namespace ResetServiceSpecificCredentialRequest {
  export const filterSensitiveLog = (obj: ResetServiceSpecificCredentialRequest): any => ({
    ...obj,
  });
}

export interface ResetServiceSpecificCredentialResponse {
  /**
   * <p>A structure with details about the updated service-specific credential, including the
   *          new password.</p>
   *          <important>
   *             <p>This is the <b>only</b> time that you can access the
   *             password. You cannot recover the password later, but you can reset it again.</p>
   *          </important>
   */
  ServiceSpecificCredential?: ServiceSpecificCredential;
}

export namespace ResetServiceSpecificCredentialResponse {
  export const filterSensitiveLog = (obj: ResetServiceSpecificCredentialResponse): any => ({
    ...obj,
    ...(obj.ServiceSpecificCredential && {
      ServiceSpecificCredential: ServiceSpecificCredential.filterSensitiveLog(obj.ServiceSpecificCredential),
    }),
  });
}

export interface ResetUserPasswordRequest {
  /**
   * <p>User name.</p>
   */
  UserName?: string;
}

export namespace ResetUserPasswordRequest {
  export const filterSensitiveLog = (obj: ResetUserPasswordRequest): any => ({
    ...obj,
  });
}

export interface ResyncMFADeviceRequest {
  /**
   * <p>The name of the user whose MFA device you want to resynchronize.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  UserName: string | undefined;

  /**
   * <p>Serial number that uniquely identifies the MFA device.</p>
   *          <p>This parameter allows (through its <a href="http://wikipedia.org/wiki/regex">regex pattern</a>) a string of characters consisting of upper and lowercase alphanumeric
   *     characters with no spaces. You can also include any of the following characters: _+=,.@-</p>
   */
  SerialNumber: string | undefined;

  /**
   * <p>An authentication code emitted by the device.</p>
   *          <p>The format for this parameter is a sequence of six digits.</p>
   */
  AuthenticationCode1: string | undefined;

  /**
   * <p>A subsequent authentication code emitted by the device.</p>
   *          <p>The format for this parameter is a sequence of six digits.</p>
   */
  AuthenticationCode2: string | undefined;
}

export namespace ResyncMFADeviceRequest {
  export const filterSensitiveLog = (obj: ResyncMFADeviceRequest): any => ({
    ...obj,
  });
}

export interface SetDefaultPolicyVersionRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM policy whose default version you want to
   *          set.</p>
   *          <p>For more information about ARNs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs) and AWS Service
   *     Namespaces</a> in the <i>AWS General Reference</i>.</p>
   */
  PolicyArn: string | undefined;

  /**
   * <p>The version of the policy to set as the default (operative) version.</p>
   *          <p>For more information about managed policy versions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-versions.html">Versioning for Managed
   *             Policies</a> in the <i>IAM User Guide</i>.</p>
   */
  VersionId: string | undefined;
}

export namespace SetDefaultPolicyVersionRequest {
  export const filterSensitiveLog = (obj: SetDefaultPolicyVersionRequest): any => ({
    ...obj,
  });
}

export enum GlobalEndpointTokenVersion {
  v1Token = "v1Token",
  v2Token = "v2Token",
}

export interface SetSecurityTokenServicePreferencesRequest {
  /**
   * <p>The version of the global endpoint token. Version 1 tokens are valid only in AWS
   *          Regions that are available by default. These tokens do not work in manually enabled
   *          Regions, such as Asia Pacific (Hong Kong). Version 2 tokens are valid in all Regions.
   *          However, version 2 tokens are longer and might affect systems where you temporarily store
   *          tokens.</p>
   *          <p>For information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and Deactivating
   *             STS in an AWS Region</a> in the <i>IAM User Guide</i>.</p>
   */
  GlobalEndpointTokenVersion: GlobalEndpointTokenVersion | string | undefined;
}

export namespace SetSecurityTokenServicePreferencesRequest {
  export const filterSensitiveLog = (obj: SetSecurityTokenServicePreferencesRequest): any => ({
    ...obj,
  });
}
