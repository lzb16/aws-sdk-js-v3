import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Specifies the days since the initiation of an incomplete multipart upload that Amazon S3 will
 *          wait before permanently removing all parts of the upload. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config">
 *             Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Policy</a> in the
 *             <i>Amazon Simple Storage Service Developer Guide</i>.</p>
 */
export interface AbortIncompleteMultipartUpload {
  /**
   * <p>Specifies the number of days after which Amazon S3 aborts an incomplete multipart
   *          upload.</p>
   */
  DaysAfterInitiation?: number;

  /**
   * <p>Specifies the number of days after which Amazon S3 aborts an incomplete multipart
   *          upload.</p>
   */
  HoursAfterInitiation?: number;

  /**
   * <p>Specifies the number of days after which Amazon S3 aborts an incomplete multipart
   *          upload.</p>
   */
  MinutesAfterInitiation?: number;
}

export namespace AbortIncompleteMultipartUpload {
  export const filterSensitiveLog = (obj: AbortIncompleteMultipartUpload): any => ({
    ...obj,
  });
}

export type RequestCharged = "requester";

export interface AbortMultipartUploadOutput {
  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace AbortMultipartUploadOutput {
  export const filterSensitiveLog = (obj: AbortMultipartUploadOutput): any => ({
    ...obj,
  });
}

export type RequestPayer = "requester";

export interface AbortMultipartUploadRequest {
  /**
   * <p>The bucket name to which the upload was taking place. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Key of the object for which the multipart upload was initiated.</p>
   */
  Key: string | undefined;

  /**
   * <p>Upload ID that identifies the multipart upload.</p>
   */
  UploadId: string | undefined;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace AbortMultipartUploadRequest {
  export const filterSensitiveLog = (obj: AbortMultipartUploadRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The specified multipart upload does not exist.</p>
 */
export interface NoSuchUpload extends __SmithyException, $MetadataBearer {
  name: "NoSuchUpload";
  $fault: "client";
}

export namespace NoSuchUpload {
  export const filterSensitiveLog = (obj: NoSuchUpload): any => ({
    ...obj,
  });
}

export type BucketAccelerateStatus = "Enabled" | "Suspended";

/**
 * <p>Configures the transfer acceleration state for an Amazon S3 bucket. For more information, see
 *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html">Amazon S3
 *             Transfer Acceleration</a> in the <i>Amazon Simple Storage Service Developer
 *          Guide</i>.</p>
 */
export interface AccelerateConfiguration {
  /**
   * <p>Specifies the transfer acceleration status of the bucket.</p>
   */
  Status?: BucketAccelerateStatus | string;
}

export namespace AccelerateConfiguration {
  export const filterSensitiveLog = (obj: AccelerateConfiguration): any => ({
    ...obj,
  });
}

export type Type = "AmazonCustomerByEmail" | "CanonicalUser" | "Group";

/**
 * <p>Container for the person being granted permissions.</p>
 */
export interface Grantee {
  /**
   * <p>Screen name of the grantee.</p>
   */
  DisplayName?: string;

  /**
   * <p>Email address of the grantee.</p>
   *          <note>
   *             <p>Using email addresses to specify a grantee is only supported in the following AWS Regions: </p>
   *             <ul>
   *                <li>
   *                   <p>US East (N. Virginia)</p>
   *                </li>
   *                <li>
   *                   <p>US West (N. California)</p>
   *                </li>
   *                <li>
   *                   <p> US West (Oregon)</p>
   *                </li>
   *                <li>
   *                   <p> Asia Pacific (Singapore)</p>
   *                </li>
   *                <li>
   *                   <p>Asia Pacific (Sydney)</p>
   *                </li>
   *                <li>
   *                   <p>Asia Pacific (Tokyo)</p>
   *                </li>
   *                <li>
   *                   <p>Europe (Ireland)</p>
   *                </li>
   *                <li>
   *                   <p>South America (São Paulo)</p>
   *                </li>
   *             </ul>
   *             <p>For a list of all the Amazon S3 supported Regions and endpoints, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region">Regions and Endpoints</a> in the AWS General Reference.</p>
   *          </note>
   */
  EmailAddress?: string;

  /**
   * <p>The canonical user ID of the grantee.</p>
   */
  ID?: string;

  /**
   * <p>URI of the grantee group.</p>
   */
  URI?: string;

  /**
   * <p>Type of grantee</p>
   */
  Type: Type | string | undefined;
}

export namespace Grantee {
  export const filterSensitiveLog = (obj: Grantee): any => ({
    ...obj,
  });
}

export type Permission = "FULL_CONTROL" | "READ" | "READ_ACP" | "WRITE" | "WRITE_ACP";

/**
 * <p>Container for grant information.</p>
 */
export interface Grant {
  /**
   * <p>The person being granted permissions.</p>
   */
  Grantee?: Grantee;

  /**
   * <p>Specifies the permission given to the grantee.</p>
   */
  Permission?: Permission | string;

  /**
   * <p>Specifies the permission given to the grantee.</p>
   */
  Delivered?: boolean;
}

export namespace Grant {
  export const filterSensitiveLog = (obj: Grant): any => ({
    ...obj,
  });
}

/**
 * <p>Container for the owner's display name and ID.</p>
 */
export interface Owner {
  /**
   * <p>Container for the display name of the owner.</p>
   */
  DisplayName?: string;

  /**
   * <p>Container for the ID of the owner.</p>
   */
  ID?: string;
}

export namespace Owner {
  export const filterSensitiveLog = (obj: Owner): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the elements that set the ACL permissions for an object per grantee.</p>
 */
export interface AccessControlPolicy {
  /**
   * <p>A list of grants.</p>
   */
  Grants?: Grant[];

  /**
   * <p>Container for the bucket owner's display name and ID.</p>
   */
  Owner?: Owner;
}

export namespace AccessControlPolicy {
  export const filterSensitiveLog = (obj: AccessControlPolicy): any => ({
    ...obj,
  });
}

export type OwnerOverride = "Destination";

/**
 * <p>A container for information about access control for replicas.</p>
 */
export interface AccessControlTranslation {
  /**
   * <p>Specifies the replica ownership. For default and valid values, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTreplication.html">PUT bucket
   *             replication</a> in the <i>Amazon Simple Storage Service API Reference</i>.</p>
   */
  Owner: OwnerOverride | string | undefined;
}

export namespace AccessControlTranslation {
  export const filterSensitiveLog = (obj: AccessControlTranslation): any => ({
    ...obj,
  });
}

export interface AdrCacheConfiguration {
  Days?: number;
  Hours?: number;
  Minutes?: number;
  StorageClass?: string;
  RangeCacheEnabled?: boolean;
}

export namespace AdrCacheConfiguration {
  export const filterSensitiveLog = (obj: AdrCacheConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>归档直读高级设置规则</p>
 */
export interface AdrRule {
  /**
   * <p>厂商平台类型</p>
   */
  Platform?: string;

  /**
   * <p>直读模式</p>
   */
  Mode?: string;

  CacheConfiguration?: AdrCacheConfiguration;
}

export namespace AdrRule {
  export const filterSensitiveLog = (obj: AdrRule): any => ({
    ...obj,
  });
}

/**
 * <p>Container for all error elements.</p>
 */
export interface _Error {
  /**
   * <p>The error key.</p>
   */
  Key?: string;

  /**
   * <p>A token to allow WORM to be enabled for an existing bucket.</p>
   */
  Token?: string;

  /**
   * <p>The version ID of the error.</p>
   */
  VersionId?: string;

  /**
   * <p>The error code is a string that uniquely identifies an error condition. It is meant to
   *          be read and understood by programs that detect and handle errors by type. </p>
   *          <p class="title">
   *             <b>Amazon S3 error codes</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> AccessDenied </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Access Denied</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 403 Forbidden</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> AccountProblem</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> There is a problem with your AWS account
   *                      that prevents the operation from completing successfully. Contact AWS Support
   *                      for further assistance.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 403 Forbidden</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> AllAccessDisabled</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> All access to this Amazon S3 resource has been
   *                      disabled. Contact AWS Support for further assistance.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 403 Forbidden</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> AmbiguousGrantByEmailAddress</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The email address you provided is
   *                      associated with more than one account.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> AuthorizationHeaderMalformed</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The authorization header you provided is
   *                      invalid.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> N/A</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> BadDigest</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The Content-MD5 you specified did not
   *                      match what we received.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> BucketAlreadyExists</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The requested bucket name is not
   *                      available. The bucket namespace is shared by all users of the system. Please
   *                      select a different name and try again.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 409 Conflict</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> BucketAlreadyOwnedByYou</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The bucket you tried to create already
   *                      exists, and you own it. Amazon S3 returns this error in all AWS Regions except in
   *                      the North Virginia Region. For legacy compatibility, if you re-create an
   *                      existing bucket that you already own in the North Virginia Region, Amazon S3 returns
   *                      200 OK and resets the bucket access control lists (ACLs).</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> 409 Conflict (in all Regions except the North
   *                      Virginia Region) </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> BucketNotEmpty</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The bucket you tried to delete is not
   *                      empty.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 409 Conflict</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> CredentialsNotSupported</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> This request does not support
   *                      credentials.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> CrossLocationLoggingProhibited</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Cross-location logging not allowed.
   *                      Buckets in one geographic location cannot log information to a bucket in
   *                      another location.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 403 Forbidden</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> EntityTooSmall</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Your proposed upload is smaller than the
   *                      minimum allowed object size.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> EntityTooLarge</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Your proposed upload exceeds the maximum
   *                      allowed object size.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> ExpiredToken</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The provided token has expired.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> IllegalVersioningConfigurationException </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Indicates that the versioning
   *                      configuration specified in the request is invalid.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> IncompleteBody</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> You did not provide the number of bytes
   *                      specified by the Content-Length HTTP header</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> IncorrectNumberOfFilesInPostRequest</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> POST requires exactly one file upload per
   *                      request.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InlineDataTooLarge</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Inline data exceeds the maximum allowed
   *                      size.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InternalError</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> We encountered an internal error. Please
   *                      try again.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 500 Internal Server Error</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Server</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidAccessKeyId</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The AWS access key ID you provided does
   *                      not exist in our records.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 403 Forbidden</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidAddressingHeader</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> You must specify the Anonymous
   *                      role.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> N/A</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidArgument</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Invalid Argument</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidBucketName</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The specified bucket is not valid.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidBucketState</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The request is not valid with the current
   *                      state of the bucket.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 409 Conflict</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidDigest</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The Content-MD5 you specified is not
   *                      valid.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidEncryptionAlgorithmError</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The encryption request you specified is
   *                      not valid. The valid value is AES256.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidLocationConstraint</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The specified location constraint is not
   *                      valid. For more information about Regions, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingBucket.html#access-bucket-intro">How to Select a
   *                         Region for Your Buckets</a>. </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidObjectState</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The operation is not valid for the current
   *                      state of the object.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 403 Forbidden</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidPart</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> One or more of the specified parts could
   *                      not be found. The part might not have been uploaded, or the specified entity
   *                      tag might not have matched the part's entity tag.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidPartOrder</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The list of parts was not in ascending
   *                      order. Parts list must be specified in order by part number.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidPayer</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> All access to this object has been
   *                      disabled. Please contact AWS Support for further assistance.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 403 Forbidden</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidPolicyDocument</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The content of the form does not meet the
   *                      conditions specified in the policy document.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidRange</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The requested range cannot be
   *                      satisfied.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 416 Requested Range Not
   *                      Satisfiable</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidRequest</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Please use AWS4-HMAC-SHA256.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> N/A</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidRequest</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> SOAP requests must be made over an HTTPS
   *                      connection.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidRequest</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Amazon S3 Transfer Acceleration is not
   *                      supported for buckets with non-DNS compliant names.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> N/A</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidRequest</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Amazon S3 Transfer Acceleration is not
   *                      supported for buckets with periods (.) in their names.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> N/A</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidRequest</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Amazon S3 Transfer Accelerate endpoint only
   *                      supports virtual style requests.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> N/A</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidRequest</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Amazon S3 Transfer Accelerate is not configured
   *                      on this bucket.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> N/A</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidRequest</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Amazon S3 Transfer Accelerate is disabled on
   *                      this bucket.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> N/A</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidRequest</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Amazon S3 Transfer Acceleration is not
   *                      supported on this bucket. Contact AWS Support for more information.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> N/A</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidRequest</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Amazon S3 Transfer Acceleration cannot be
   *                      enabled on this bucket. Contact AWS Support for more information.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> N/A</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidSecurity</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The provided security credentials are not
   *                      valid.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 403 Forbidden</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidSOAPRequest</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The SOAP request body is invalid.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidStorageClass</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The storage class you specified is not
   *                      valid.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidTargetBucketForLogging</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The target bucket for logging does not
   *                      exist, is not owned by you, or does not have the appropriate grants for the
   *                      log-delivery group. </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidToken</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The provided token is malformed or
   *                      otherwise invalid.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> InvalidURI</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Couldn't parse the specified URI.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> KeyTooLongError</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Your key is too long.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> MalformedACLError</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The XML you provided was not well-formed
   *                      or did not validate against our published schema.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> MalformedPOSTRequest </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The body of your POST request is not
   *                      well-formed multipart/form-data.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> MalformedXML</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> This happens when the user sends malformed
   *                      XML (XML that doesn't conform to the published XSD) for the configuration. The
   *                      error message is, "The XML you provided was not well-formed or did not validate
   *                      against our published schema." </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> MaxMessageLengthExceeded</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Your request was too big.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> MaxPostPreDataLengthExceededError</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Your POST request fields preceding the
   *                      upload file were too large.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> MetadataTooLarge</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Your metadata headers exceed the maximum
   *                      allowed metadata size.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> MethodNotAllowed</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The specified method is not allowed
   *                      against this resource.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 405 Method Not Allowed</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> MissingAttachment</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> A SOAP attachment was expected, but none
   *                      were found.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> N/A</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> MissingContentLength</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> You must provide the Content-Length HTTP
   *                      header.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 411 Length Required</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> MissingRequestBodyError</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> This happens when the user sends an empty
   *                      XML document as a request. The error message is, "Request body is empty."
   *                   </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> MissingSecurityElement</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The SOAP 1.1 request is missing a security
   *                      element.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> MissingSecurityHeader</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Your request is missing a required
   *                      header.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> NoLoggingStatusForKey</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> There is no such thing as a logging status
   *                      subresource for a key.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> NoSuchBucket</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The specified bucket does not
   *                      exist.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 404 Not Found</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> NoSuchBucketPolicy</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The specified bucket does not have a
   *                      bucket policy.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 404 Not Found</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> NoSuchKey</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The specified key does not exist.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 404 Not Found</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> NoSuchLifecycleConfiguration</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The lifecycle configuration does not
   *                      exist. </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 404 Not Found</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> NoSuchUpload</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The specified multipart upload does not
   *                      exist. The upload ID might be invalid, or the multipart upload might have been
   *                      aborted or completed.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 404 Not Found</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> NoSuchVersion </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Indicates that the version ID specified in
   *                      the request does not match an existing version.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 404 Not Found</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> NotImplemented</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> A header you provided implies
   *                      functionality that is not implemented.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 501 Not Implemented</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Server</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> NotSignedUp</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Your account is not signed up for the Amazon S3
   *                      service. You must sign up before you can use Amazon S3. You can sign up at the
   *                      following URL: https://aws.amazon.com/s3</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 403 Forbidden</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> OperationAborted</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> A conflicting conditional operation is
   *                      currently in progress against this resource. Try again.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 409 Conflict</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> PermanentRedirect</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The bucket you are attempting to access
   *                      must be addressed using the specified endpoint. Send all future requests to
   *                      this endpoint.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 301 Moved Permanently</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> PreconditionFailed</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> At least one of the preconditions you
   *                      specified did not hold.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 412 Precondition Failed</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> Redirect</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Temporary redirect.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 307 Moved Temporarily</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> RestoreAlreadyInProgress</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Object restore is already in
   *                      progress.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 409 Conflict</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> RequestIsNotMultiPartContent</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Bucket POST must be of the enclosure-type
   *                      multipart/form-data.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> RequestTimeout</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Your socket connection to the server was
   *                      not read from or written to within the timeout period.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> RequestTimeTooSkewed</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The difference between the request time
   *                      and the server's time is too large.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 403 Forbidden</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> RequestTorrentOfBucketError</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Requesting the torrent file of a bucket is
   *                      not permitted.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> SignatureDoesNotMatch</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The request signature we calculated does
   *                      not match the signature you provided. Check your AWS secret access key and
   *                      signing method. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html">REST Authentication</a> and
   *                         <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/SOAPAuthentication.html">SOAP Authentication</a>
   *                      for details.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 403 Forbidden</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> ServiceUnavailable</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Reduce your request rate.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 503 Service Unavailable</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Server</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> SlowDown</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> Reduce your request rate.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 503 Slow Down</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Server</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> TemporaryRedirect</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> You are being redirected to the bucket
   *                      while DNS updates.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 307 Moved Temporarily</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> TokenRefreshRequired</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The provided token must be
   *                      refreshed.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> TooManyBuckets</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> You have attempted to create more buckets
   *                      than allowed.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> UnexpectedContent</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> This request does not support
   *                      content.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> UnresolvableGrantByEmailAddress</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The email address you provided does not
   *                      match any account on record.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <i>Code:</i> UserKeyMustBeSpecified</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>Description:</i> The bucket POST must contain the specified
   *                      field name. If it is specified, check the order of the fields.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>HTTP Status Code:</i> 400 Bad Request</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <i>SOAP Fault Code Prefix:</i> Client</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *          <p></p>
   */
  Code?: string;

  /**
   * <p>The error message contains a generic description of the error condition in English. It
   *          is intended for a human audience. Simple programs display the message directly to the end
   *          user if they encounter an error condition they don't know how or don't care to handle.
   *          Sophisticated programs with more exhaustive error handling and proper internationalization
   *          are more likely to ignore the error message.</p>
   */
  Message?: string;
}

export namespace _Error {
  export const filterSensitiveLog = (obj: _Error): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the deleted object.</p>
 */
export interface DeletedObject {
  /**
   * <p>The name of the deleted object.</p>
   */
  Key?: string;

  Token?: string;
  /**
   * <p>The version ID of the deleted object.</p>
   */
  VersionId?: string;

  /**
   * <p>Specifies whether the versioned object that was permanently deleted was (true) or was
   *          not (false) a delete marker. In a simple DELETE, this header indicates whether (true) or
   *          not (false) a delete marker was created.</p>
   */
  DeleteMarker?: boolean;

  /**
   * <p>The version ID of the delete marker created as a result of the DELETE operation. If you
   *          delete a specific object version, the value returned by this header is the version ID of
   *          the object version deleted.</p>
   */
  DeleteMarkerVersionId?: string;
}

export namespace DeletedObject {
  export const filterSensitiveLog = (obj: DeletedObject): any => ({
    ...obj,
  });
}

export interface BatchRestoreObjectOutput {
  /**
   * <p>Key name of the object to restored successfully.</p>
   */
  Restored?: DeletedObject[];

  /**
   * <p>Container for a failed delete operation that describes the snapshot that Amazon S3 attempted to delete and the error it encountered.</p>
   */
  Errors?: _Error[];
}

export namespace BatchRestoreObjectOutput {
  export const filterSensitiveLog = (obj: BatchRestoreObjectOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Object Identifier is unique value to identify objects.</p>
 */
export interface ObjectIdentifier {
  /**
   * <p>Key name of the object to delete.</p>
   */
  Key: string | undefined;

  /**
   * <p>A token to allow WORM to be enabled for an existing bucket.</p>
   */
  Token?: string;

  /**
   * <p>VersionId for the specific version of the object to delete.</p>
   */
  VersionId?: string;
}

export namespace ObjectIdentifier {
  export const filterSensitiveLog = (obj: ObjectIdentifier): any => ({
    ...obj,
  });
}

export type StorageClass =
  | "DEEP_ARCHIVE"
  | "EXTREME"
  | "GLACIER"
  | "INTELLIGENT_TIERING"
  | "ONEZONE_IA"
  | "OUTPOSTS"
  | "PERFORMANCE"
  | "REDUCED_REDUNDANCY"
  | "STANDARD"
  | "STANDARD_IA";

export type Tier = "Bulk" | "Expedited" | "Standard";

export interface BatchRestoreRequest {
  /**
   * <p>Lifetime of the active copy in days. Do not use with restores that specify
   *             <code>OutputLocation</code>.</p>
   *          <p>The Days element is required for regular restores, and must not be provided for select
   *          requests.</p>
   */
  Days?: number;

  /**
   * <p>归档恢复临时存储层架</p>
   */
  StorageClass?: StorageClass | string;

  /**
   * <p>Retrieval tier at which the restore will be processed.</p>
   */
  Tier: Tier | string | undefined;
}

export namespace BatchRestoreRequest {
  export const filterSensitiveLog = (obj: BatchRestoreRequest): any => ({
    ...obj,
  });
}

export interface Restore {
  /**
   * <p>批量恢复归档对象的信息</p>
   */
  RestoreRequest: BatchRestoreRequest | undefined;

  /**
   * <p>对象信息</p>
   */
  Objects: ObjectIdentifier[] | undefined;
}

export namespace Restore {
  export const filterSensitiveLog = (obj: Restore): any => ({
    ...obj,
  });
}

export interface BatchRestoreObjectRequest {
  /**
   * <p>The bucket name containing the object to restore. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  Restore?: Restore;
}

export namespace BatchRestoreObjectRequest {
  export const filterSensitiveLog = (obj: BatchRestoreObjectRequest): any => ({
    ...obj,
  });
}

/**
 * <p>This operation is not allowed against this storage tier.</p>
 */
export interface ObjectAlreadyInActiveTierError extends __SmithyException, $MetadataBearer {
  name: "ObjectAlreadyInActiveTierError";
  $fault: "client";
}

export namespace ObjectAlreadyInActiveTierError {
  export const filterSensitiveLog = (obj: ObjectAlreadyInActiveTierError): any => ({
    ...obj,
  });
}

export type ServerSideEncryption = "AES256" | "aws:kms";

export interface CompleteMultipartUploadOutput {
  /**
   * <p>The URI that identifies the newly created object.</p>
   */
  Location?: string;

  /**
   * <p>The name of the bucket that contains the newly created object.</p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket?: string;

  /**
   * <p>The object key of the newly created object.</p>
   */
  Key?: string;

  /**
   * <p>If the object expiration is configured, this will contain the expiration date
   *          (expiry-date) and rule ID (rule-id). The value of rule-id is URL encoded.</p>
   */
  Expiration?: string;

  /**
   * <p>Entity tag that identifies the newly created object's data. Objects with different
   *          object data will have different entity tags. The entity tag is an opaque string. The entity
   *          tag may or may not be an MD5 digest of the object data. If the entity tag is not an MD5
   *          digest of the object data, it will contain one or more nonhexadecimal characters and/or
   *          will consist of less than 32 or more than 32 hexadecimal digits.</p>
   */
  ETag?: string;

  /**
   * <p>If you specified server-side encryption either with an Amazon S3-managed encryption key or an
   *          AWS KMS customer master key (CMK) in your initiate multipart upload request, the response
   *          includes this header. It confirms the encryption algorithm that Amazon S3 used to encrypt the
   *          object.</p>
   */
  ServerSideEncryption?: ServerSideEncryption | string;

  /**
   * <p>Version ID of the newly created object, in case the bucket has versioning turned
   *          on.</p>
   */
  VersionId?: string;

  /**
   * <p>If present, specifies the ID of the AWS Key Management Service (AWS KMS) symmetric
   *          customer managed customer master key (CMK) that was used for the object.</p>
   */
  SSEKMSKeyId?: string;

  /**
   * <p>Indicates whether the multipart upload uses an S3 Bucket Key for server-side encryption with AWS KMS (SSE-KMS).</p>
   */
  BucketKeyEnabled?: boolean;

  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace CompleteMultipartUploadOutput {
  export const filterSensitiveLog = (obj: CompleteMultipartUploadOutput): any => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
  });
}

/**
 * <p>Details of the parts that were uploaded.</p>
 */
export interface CompletedPart {
  /**
   * <p>Entity tag returned when the part was uploaded.</p>
   */
  ETag?: string;

  /**
   * <p>Part number that identifies the part. This is a positive integer between 1 and
   *          10,000.</p>
   */
  PartNumber?: number;
}

export namespace CompletedPart {
  export const filterSensitiveLog = (obj: CompletedPart): any => ({
    ...obj,
  });
}

/**
 * <p>The container for the completed multipart upload details.</p>
 */
export interface CompletedMultipartUpload {
  /**
   * <p>Array of CompletedPart data types.</p>
   */
  Parts?: CompletedPart[];
}

export namespace CompletedMultipartUpload {
  export const filterSensitiveLog = (obj: CompletedMultipartUpload): any => ({
    ...obj,
  });
}

export interface CompleteMultipartUploadRequest {
  /**
   * <p>Name of the bucket to which the multipart upload was initiated.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Object key for which the multipart upload was initiated.</p>
   */
  Key: string | undefined;

  /**
   * <p>The container for the multipart upload request information.</p>
   */
  MultipartUpload?: CompletedMultipartUpload;

  /**
   * <p>ID for the initiated multipart upload.</p>
   */
  UploadId: string | undefined;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace CompleteMultipartUploadRequest {
  export const filterSensitiveLog = (obj: CompleteMultipartUploadRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Container for all response elements.</p>
 */
export interface CopyObjectResult {
  /**
   * <p>Returns the ETag of the new object. The ETag reflects only changes to the contents of an
   *          object, not its metadata. The source and destination ETag is identical for a successfully
   *          copied object.</p>
   */
  ETag?: string;

  /**
   * <p>Returns the date that the object was last modified.</p>
   */
  LastModified?: Date;
}

export namespace CopyObjectResult {
  export const filterSensitiveLog = (obj: CopyObjectResult): any => ({
    ...obj,
  });
}

export interface CopyObjectOutput {
  /**
   * <p>Container for all response elements.</p>
   */
  CopyObjectResult?: CopyObjectResult;

  /**
   * <p>If the object expiration is configured, the response includes this header.</p>
   */
  Expiration?: string;

  /**
   * <p>Version of the copied object in the destination bucket.</p>
   */
  CopySourceVersionId?: string;

  /**
   * <p>Version ID of the newly created copy.</p>
   */
  VersionId?: string;

  /**
   * <p>The server-side encryption algorithm used when storing this object in Amazon S3 (for example,
   *          AES256, aws:kms).</p>
   */
  ServerSideEncryption?: ServerSideEncryption | string;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the
   *          response will include this header confirming the encryption algorithm used.</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the
   *          response will include this header to provide round-trip message integrity verification of
   *          the customer-provided encryption key.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>If present, specifies the ID of the AWS Key Management Service (AWS KMS) symmetric
   *          customer managed customer master key (CMK) that was used for the object.</p>
   */
  SSEKMSKeyId?: string;

  /**
   * <p>If present, specifies the AWS KMS Encryption Context to use for object encryption. The
   *          value of this header is a base64-encoded UTF-8 string holding JSON with the encryption
   *          context key-value pairs.</p>
   */
  SSEKMSEncryptionContext?: string;

  /**
   * <p>Indicates whether the copied object uses an S3 Bucket Key for server-side encryption with AWS KMS (SSE-KMS).</p>
   */
  BucketKeyEnabled?: boolean;

  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace CopyObjectOutput {
  export const filterSensitiveLog = (obj: CopyObjectOutput): any => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
    ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }),
  });
}

export type ObjectCannedACL =
  | "authenticated-read"
  | "aws-exec-read"
  | "bucket-owner-full-control"
  | "bucket-owner-read"
  | "private"
  | "public-read"
  | "public-read-write";

export type MetadataDirective = "COPY" | "REPLACE";

export type ObjectLockLegalHoldStatus = "OFF" | "ON";

export type ObjectLockMode = "COMPLIANCE" | "GOVERNANCE";

export type TaggingDirective = "COPY" | "REPLACE";

export interface CopyObjectRequest {
  /**
   * <p>The date and time when you want this object's WORM to expire. Must be formatted
   *          as a timestamp parameter.</p>
   */
  WormRetainUntilDate?: Date;

  /**
   * <p>The date and time when you want this object's WORM to expire. Must be formatted
   *          as a timestamp parameter.</p>
   */
  WormGraceUntilDate?: Date;

  /**
   * <p>The canned ACL to apply to the object.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  ACL?: ObjectCannedACL | string;

  /**
   * <p>The name of the destination bucket.</p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>快照名</p>
   */
  SnapshotName?: string;

  /**
   * <p>VersionId used to reference a specific version of the object.</p>
   */
  VersionId?: string;

  /**
   * <p>Specifies caching behavior along the request/reply chain.</p>
   */
  CacheControl?: string;

  /**
   * <p>Specifies presentational information for the object.</p>
   */
  ContentDisposition?: string;

  /**
   * <p>Specifies what content encodings have been applied to the object and thus what decoding
   *          mechanisms must be applied to obtain the media-type referenced by the Content-Type header
   *          field.</p>
   */
  ContentEncoding?: string;

  /**
   * <p>The language the content is in.</p>
   */
  ContentLanguage?: string;

  /**
   * <p>A standard MIME type describing the format of the object data.</p>
   */
  ContentType?: string;

  /**
   * <p>Specifies the source object for the copy operation. You specify the value in one of two
   *          formats, depending on whether you want to access the source object through an <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-points.html">access
   *          point</a>:</p>
   *          <ul>
   *             <li>
   *                <p>For objects not accessed through an access point, specify the name of the source
   *                bucket and the key of the source object, separated by a slash (/). For example, to
   *                copy the object <code>reports/january.pdf</code> from the bucket
   *                   <code>awsexamplebucket</code>, use
   *                   <code>awsexamplebucket/reports/january.pdf</code>. The value must be URL
   *                encoded.</p>
   *             </li>
   *             <li>
   *                <p>For objects accessed through access points, specify the Amazon Resource Name (ARN) of the object as accessed through the access point, in the format <code>arn:aws:s3:<Region>:<account-id>:accesspoint/<access-point-name>/object/<key></code>. For example, to copy the object <code>reports/january.pdf</code> through access point <code>my-access-point</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3:us-west-2:123456789012:accesspoint/my-access-point/object/reports/january.pdf</code>. The value must be URL encoded.</p>
   *                <note>
   *                   <p>Amazon S3 supports copy operations using access points only when the source and destination buckets are in the same AWS Region.</p>
   *                </note>
   *                <p>Alternatively, for objects accessed through Amazon S3 on Outposts, specify the ARN of the object as accessed in the format <code>arn:aws:s3-outposts:<Region>:<account-id>:outpost/<outpost-id>/object/<key></code>. For example, to copy the object <code>reports/january.pdf</code> through outpost <code>my-outpost</code> owned by account <code>123456789012</code> in Region <code>us-west-2</code>, use the URL encoding of <code>arn:aws:s3-outposts:us-west-2:123456789012:outpost/my-outpost/object/reports/january.pdf</code>. The value must be URL encoded.  </p>
   *             </li>
   *          </ul>
   *          <p>To copy a specific version of an object, append <code>?versionId=<version-id></code>
   *          to the value (for example,
   *             <code>awsexamplebucket/reports/january.pdf?versionId=QUpfdndhfd8438MNFDN93jdnJFkdmqnh893</code>).
   *          If you don't specify a version ID, Amazon S3 copies the latest version of the source
   *          object.</p>
   */
  CopySource: string | undefined;

  /**
   * <p>Copies the object if its entity tag (ETag) matches the specified tag.</p>
   */
  CopySourceIfMatch?: string;

  /**
   * <p>Copies the object if it has been modified since the specified time.</p>
   */
  CopySourceIfModifiedSince?: Date;

  /**
   * <p>Copies the object if its entity tag (ETag) is different than the specified ETag.</p>
   */
  CopySourceIfNoneMatch?: string;

  /**
   * <p>Copies the object if it hasn't been modified since the specified time.</p>
   */
  CopySourceIfUnmodifiedSince?: Date;

  /**
   * <p>The date and time at which the object is no longer cacheable.</p>
   */
  Expires?: Date;

  /**
   * <p>Gives the grantee READ, READ_ACP, and WRITE_ACP permissions on the
   *       object.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantFullControl?: string;

  /**
   * <p>Allows grantee to read the object data and its
   *       metadata.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantRead?: string;

  /**
   * <p>Allows grantee to read the object ACL.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantReadACP?: string;

  /**
   * <p>Allows grantee to write the ACL for the applicable
   *       object.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantWriteACP?: string;

  /**
   * <p>The key of the destination object.</p>
   */
  Key: string | undefined;

  /**
   * <p>A map of metadata to store with the object in S3.</p>
   */
  Metadata?: { [key: string]: string };

  /**
   * <p>Specifies whether the metadata is copied from the source object or replaced with
   *          metadata provided in the request.</p>
   */
  MetadataDirective?: MetadataDirective | string;

  /**
   * <p>Specifies whether the object tag-set are copied from the source object or replaced with
   *          tag-set provided in the request.</p>
   */
  TaggingDirective?: TaggingDirective | string;

  /**
   * <p>The server-side encryption algorithm used when storing this object in Amazon S3 (for example,
   *          AES256, aws:kms).</p>
   */
  ServerSideEncryption?: ServerSideEncryption | string;

  /**
   * <p>By default, Amazon S3 uses the STANDARD Storage Class to store newly created objects. The
   *          STANDARD storage class provides high durability and high availability. Depending on
   *          performance needs, you can specify a different Storage Class. Amazon S3 on Outposts only uses
   *          the OUTPOSTS Storage Class. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html">Storage Classes</a> in the <i>Amazon S3
   *             Service Developer Guide</i>.</p>
   */
  StorageClass?: StorageClass | string;

  /**
   * <p>copy object glacier configuration</p>
   */
  GlacierConfiguration?: string;

  /**
   * <p>If the bucket is configured as a website, redirects requests for this object to another
   *          object in the same bucket or to an external URL. Amazon S3 stores the value of this header in
   *          the object metadata.</p>
   */
  WebsiteRedirectLocation?: string;

  /**
   * <p>Specifies the algorithm to use to when encrypting the object (for example,
   *          AES256).</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This
   *          value is used to store the object and then it is discarded; Amazon S3 does not store the
   *          encryption key. The key must be appropriate for use with the algorithm specified in the
   *             <code>x-amz-server-side-encryption-customer-algorithm</code> header.</p>
   */
  SSECustomerKey?: string;

  /**
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses
   *          this header for a message integrity check to ensure that the encryption key was transmitted
   *          without error.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>Specifies the AWS KMS key ID to use for object encryption. All GET and PUT requests for
   *          an object protected by AWS KMS will fail if not made via SSL or using SigV4. For
   *          information about configuring using any of the officially supported AWS SDKs and AWS CLI,
   *          see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingAWSSDK.html#specify-signature-version">Specifying the
   *             Signature Version in Request Authentication</a> in the <i>Amazon S3 Developer
   *             Guide</i>.</p>
   */
  SSEKMSKeyId?: string;

  /**
   * <p>Specifies the AWS KMS Encryption Context to use for object encryption. The value of this
   *          header is a base64-encoded UTF-8 string holding JSON with the encryption context key-value
   *          pairs.</p>
   */
  SSEKMSEncryptionContext?: string;

  /**
   * <p>Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with server-side encryption using AWS KMS (SSE-KMS). Setting this header to <code>true</code> causes Amazon S3 to use an S3 Bucket Key for object encryption with SSE-KMS. </p>
   *          <p>Specifying this header with a COPY operation doesn’t affect bucket-level settings for S3 Bucket Key.</p>
   */
  BucketKeyEnabled?: boolean;

  /**
   * <p>Specifies the algorithm to use when decrypting the source object (for example,
   *          AES256).</p>
   */
  CopySourceSSECustomerAlgorithm?: string;

  /**
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use to decrypt the source
   *          object. The encryption key provided in this header must be one that was used when the
   *          source object was created.</p>
   */
  CopySourceSSECustomerKey?: string;

  /**
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses
   *          this header for a message integrity check to ensure that the encryption key was transmitted
   *          without error.</p>
   */
  CopySourceSSECustomerKeyMD5?: string;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>The tag-set for the object destination object this value must be used in conjunction
   *          with the <code>TaggingDirective</code>. The tag-set must be encoded as URL Query
   *          parameters.</p>
   */
  Tagging?: string;

  /**
   * <p>The Object Lock mode that you want to apply to the copied object.</p>
   */
  ObjectLockMode?: ObjectLockMode | string;

  /**
   * <p>The date and time when you want the copied object's Object Lock to expire.</p>
   */
  ObjectLockRetainUntilDate?: Date;

  /**
   * <p>Specifies whether you want to apply a Legal Hold to the copied object.</p>
   */
  ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | string;

  /**
   * <p>The account id of the expected destination bucket owner. If the destination bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * <p>The account id of the expected source bucket owner. If the source bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedSourceBucketOwner?: string;

  /**
   * <p>Indicates whether this action should bypass Governance-mode restrictions.</p>
   */
  BypassRetentionTimeLimit?: boolean;
}

export namespace CopyObjectRequest {
  export const filterSensitiveLog = (obj: CopyObjectRequest): any => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
    ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }),
    ...(obj.CopySourceSSECustomerKey && { CopySourceSSECustomerKey: SENSITIVE_STRING }),
  });
}

/**
 * <p>The source object of the COPY operation is not in the active tier and is only stored in
 *          Amazon S3 Glacier.</p>
 */
export interface ObjectNotInActiveTierError extends __SmithyException, $MetadataBearer {
  name: "ObjectNotInActiveTierError";
  $fault: "client";
}

export namespace ObjectNotInActiveTierError {
  export const filterSensitiveLog = (obj: ObjectNotInActiveTierError): any => ({
    ...obj,
  });
}

/**
 * <p>The requested bucket name is not available. The bucket namespace is shared by all users
 *          of the system. Select a different name and try again.</p>
 */
export interface BucketAlreadyExists extends __SmithyException, $MetadataBearer {
  name: "BucketAlreadyExists";
  $fault: "client";
}

export namespace BucketAlreadyExists {
  export const filterSensitiveLog = (obj: BucketAlreadyExists): any => ({
    ...obj,
  });
}

/**
 * <p>The bucket you tried to create already exists, and you own it. Amazon S3 returns this error
 *          in all AWS Regions except in the North Virginia Region. For legacy compatibility, if you
 *          re-create an existing bucket that you already own in the North Virginia Region, Amazon S3
 *          returns 200 OK and resets the bucket access control lists (ACLs).</p>
 */
export interface BucketAlreadyOwnedByYou extends __SmithyException, $MetadataBearer {
  name: "BucketAlreadyOwnedByYou";
  $fault: "client";
}

export namespace BucketAlreadyOwnedByYou {
  export const filterSensitiveLog = (obj: BucketAlreadyOwnedByYou): any => ({
    ...obj,
  });
}

export interface CreateBucketOutput {
  /**
   * <p>Specifies the Region where the bucket will be created. If you are creating a bucket on
   *          the US East (N. Virginia) Region (us-east-1), you do not need to specify the
   *          location.</p>
   */
  Location?: string;
}

export namespace CreateBucketOutput {
  export const filterSensitiveLog = (obj: CreateBucketOutput): any => ({
    ...obj,
  });
}

export type BucketCannedACL = "authenticated-read" | "private" | "public-read" | "public-read-write";

export type BucketLocationConstraint =
  | "EU"
  | "af-south-1"
  | "ap-east-1"
  | "ap-northeast-1"
  | "ap-northeast-2"
  | "ap-northeast-3"
  | "ap-south-1"
  | "ap-southeast-1"
  | "ap-southeast-2"
  | "ca-central-1"
  | "cn-north-1"
  | "cn-northwest-1"
  | "eu-central-1"
  | "eu-north-1"
  | "eu-south-1"
  | "eu-west-1"
  | "eu-west-2"
  | "eu-west-3"
  | "me-south-1"
  | "sa-east-1"
  | "us-east-2"
  | "us-gov-east-1"
  | "us-gov-west-1"
  | "us-west-1"
  | "us-west-2";

/**
 * <p>The configuration information for the bucket.</p>
 */
export interface CreateBucketConfiguration {
  /**
   * <p>Specifies the Region where the bucket will be created. If you don't specify a Region,
   *          the bucket is created in the US East (N. Virginia) Region (us-east-1).</p>
   */
  LocationConstraint?: BucketLocationConstraint | string;
}

export namespace CreateBucketConfiguration {
  export const filterSensitiveLog = (obj: CreateBucketConfiguration): any => ({
    ...obj,
  });
}

export type PolicyMode = "private" | "public-read" | "public-read-write";

export interface CreateBucketRequest {
  /**
   * <p>The enabled dedup to apply to the bucket.</p>
   */
  EnableDedup?: number;

  /**
   * <p>The canned ACL to apply to the bucket.</p>
   */
  ACL?: BucketCannedACL | string;

  /**
   * <p>The name of the bucket to create.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The configuration information for the bucket.</p>
   */
  CreateBucketConfiguration?: CreateBucketConfiguration;

  /**
   * <p>The encryption mode for the bucket.</p>
   */
  EncryptionMode?: number;

  /**
   * <p>Allows grantee the read, write, read ACP, and write ACP permissions on the
   *          bucket.</p>
   */
  GrantFullControl?: string;

  /**
   * <p>Allows grantee to list the objects in the bucket.</p>
   */
  GrantRead?: string;

  /**
   * <p>Allows grantee to read the bucket ACL.</p>
   */
  GrantReadACP?: string;

  /**
   * <p>Allows grantee to create, overwrite, and delete any object in the bucket.</p>
   */
  GrantWrite?: string;

  /**
   * <p>Allows grantee to write the ACL for the applicable bucket.</p>
   */
  GrantWriteACP?: string;

  /**
   * <p>Specifies whether you want S3 Object Lock to be enabled for the new bucket.</p>
   */
  ObjectLockEnabledForBucket?: boolean;

  /**
   * <p>The policy mode for the bucket.</p>
   */
  PolicyMode?: PolicyMode | string;

  /**
   * <p>The redundancy for the bucket.</p>
   */
  Redundancy?: string;

  /**
   * <p>The storage pool for the bucket.</p>
   */
  StoragePoolId?: string;

  /**
   * <p>The tag-set for the bucket. The tag-set must be encoded as URL Query parameters.</p>
   */
  Tagging?: string;

  /**
   * <p>The storage-class for the bucket.</p>
   */
  StorageClass?: StorageClass | string;

  /**
   * <p>The glacier-configuration for the bucket.</p>
   */
  GlacierConfiguration?: string;
}

export namespace CreateBucketRequest {
  export const filterSensitiveLog = (obj: CreateBucketRequest): any => ({
    ...obj,
  });
}

export interface CreateMultipartUploadOutput {
  /**
   * <p>If the bucket has a lifecycle rule configured with an action to abort incomplete
   *          multipart uploads and the prefix in the lifecycle rule matches the object name in the
   *          request, the response includes this header. The header indicates when the initiated
   *          multipart upload becomes eligible for an abort operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config">
   *             Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Policy</a>.</p>
   *
   *          <p>The response also includes the <code>x-amz-abort-rule-id</code> header that provides the
   *          ID of the lifecycle configuration rule that defines this action.</p>
   */
  AbortDate?: Date;

  /**
   * <p>This header is returned along with the <code>x-amz-abort-date</code> header. It
   *          identifies the applicable lifecycle configuration rule that defines the action to abort
   *          incomplete multipart uploads.</p>
   */
  AbortRuleId?: string;

  /**
   * <p>The name of the bucket to which the multipart upload was initiated. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket?: string;

  /**
   * <p>Object key for which the multipart upload was initiated.</p>
   */
  Key?: string;

  /**
   * <p>ID for the initiated multipart upload.</p>
   */
  UploadId?: string;

  /**
   * <p>The server-side encryption algorithm used when storing this object in Amazon S3 (for example,
   *          AES256, aws:kms).</p>
   */
  ServerSideEncryption?: ServerSideEncryption | string;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the
   *          response will include this header confirming the encryption algorithm used.</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>If server-side encryption with a customer-provided encryption key was requested, the
   *          response will include this header to provide round-trip message integrity verification of
   *          the customer-provided encryption key.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>If present, specifies the ID of the AWS Key Management Service (AWS KMS) symmetric
   *          customer managed customer master key (CMK) that was used for the object.</p>
   */
  SSEKMSKeyId?: string;

  /**
   * <p>If present, specifies the AWS KMS Encryption Context to use for object encryption. The
   *          value of this header is a base64-encoded UTF-8 string holding JSON with the encryption
   *          context key-value pairs.</p>
   */
  SSEKMSEncryptionContext?: string;

  /**
   * <p>Indicates whether the multipart upload uses an S3 Bucket Key for server-side encryption with AWS KMS (SSE-KMS).</p>
   */
  BucketKeyEnabled?: boolean;

  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace CreateMultipartUploadOutput {
  export const filterSensitiveLog = (obj: CreateMultipartUploadOutput): any => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
    ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }),
  });
}

export interface CreateMultipartUploadRequest {
  /**
   * <p>The canned ACL to apply to the object.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  ACL?: ObjectCannedACL | string;

  /**
   * <p>The name of the bucket to which to initiate the upload</p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Specifies caching behavior along the request/reply chain.</p>
   */
  CacheControl?: string;

  /**
   * <p>Specifies presentational information for the object.</p>
   */
  ContentDisposition?: string;

  /**
   * <p>Specifies what content encodings have been applied to the object and thus what decoding
   *          mechanisms must be applied to obtain the media-type referenced by the Content-Type header
   *          field.</p>
   */
  ContentEncoding?: string;

  /**
   * <p>The language the content is in.</p>
   */
  ContentLanguage?: string;

  /**
   * <p>A standard MIME type describing the format of the object data.</p>
   */
  ContentType?: string;

  /**
   * <p>The date and time at which the object is no longer cacheable.</p>
   */
  Expires?: Date;

  /**
   * <p>Gives the grantee READ, READ_ACP, and WRITE_ACP permissions on the
   *       object.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantFullControl?: string;

  /**
   * <p>Allows grantee to read the object data and its
   *       metadata.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantRead?: string;

  /**
   * <p>Allows grantee to read the object ACL.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantReadACP?: string;

  /**
   * <p>Allows grantee to write the ACL for the applicable
   *       object.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantWriteACP?: string;

  /**
   * <p>Object key for which the multipart upload is to be initiated.</p>
   */
  Key: string | undefined;

  /**
   * <p>A map of metadata to store with the object in S3.</p>
   */
  Metadata?: { [key: string]: string };

  /**
   * <p>The server-side encryption algorithm used when storing this object in Amazon S3 (for example,
   *          AES256, aws:kms).</p>
   */
  ServerSideEncryption?: ServerSideEncryption | string;

  /**
   * <p>By default, Amazon S3 uses the STANDARD Storage Class to store newly created objects. The
   *          STANDARD storage class provides high durability and high availability. Depending on
   *          performance needs, you can specify a different Storage Class. Amazon S3 on Outposts only uses
   *          the OUTPOSTS Storage Class. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html">Storage Classes</a> in the <i>Amazon S3
   *             Service Developer Guide</i>.</p>
   */
  StorageClass?: StorageClass | string;

  /**
   * <p>对象多段上传glacier-configuration</p>
   */
  GlacierConfiguration?: StorageClass | string;

  /**
   * <p>If the bucket is configured as a website, redirects requests for this object to another
   *          object in the same bucket or to an external URL. Amazon S3 stores the value of this header in
   *          the object metadata.</p>
   */
  WebsiteRedirectLocation?: string;

  /**
   * <p>Specifies the algorithm to use to when encrypting the object (for example,
   *          AES256).</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This
   *          value is used to store the object and then it is discarded; Amazon S3 does not store the
   *          encryption key. The key must be appropriate for use with the algorithm specified in the
   *             <code>x-amz-server-side-encryption-customer-algorithm</code> header.</p>
   */
  SSECustomerKey?: string;

  /**
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses
   *          this header for a message integrity check to ensure that the encryption key was transmitted
   *          without error.</p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>Specifies the ID of the symmetric customer managed AWS KMS CMK to use for object
   *          encryption. All GET and PUT requests for an object protected by AWS KMS will fail if not
   *          made via SSL or using SigV4. For information about configuring using any of the officially
   *          supported AWS SDKs and AWS CLI, see <a href="https://docs.aws.amazon.com/http:/docs.aws.amazon.com/AmazonS3/latest/dev/UsingAWSSDK.html#specify-signature-version">Specifying the Signature Version in Request Authentication</a>
   *          in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  SSEKMSKeyId?: string;

  /**
   * <p>Specifies the AWS KMS Encryption Context to use for object encryption. The value of this
   *          header is a base64-encoded UTF-8 string holding JSON with the encryption context key-value
   *          pairs.</p>
   */
  SSEKMSEncryptionContext?: string;

  /**
   * <p>Specifies whether Amazon S3 should use an S3 Bucket Key for object encryption with server-side encryption using AWS KMS (SSE-KMS). Setting this header to <code>true</code> causes Amazon S3 to use an S3 Bucket Key for object encryption with SSE-KMS.</p>
   *          <p>Specifying this header with an object operation doesn’t affect bucket-level settings for S3 Bucket Key.</p>
   */
  BucketKeyEnabled?: boolean;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>The tag-set for the object. The tag-set must be encoded as URL Query parameters.</p>
   */
  Tagging?: string;

  /**
   * <p>Specifies the Object Lock mode that you want to apply to the uploaded object.</p>
   */
  ObjectLockMode?: ObjectLockMode | string;

  /**
   * <p>Specifies the date and time when you want the Object Lock to expire.</p>
   */
  ObjectLockRetainUntilDate?: Date;

  /**
   * <p>The date and time when you want this object's WORM to expire. Must be formatted
   *          as a timestamp parameter.</p>
   */
  WormRetainUntilDate?: Date;

  /**
   * <p>The date and time when you want this object's WORM to expire. Must be formatted
   *          as a timestamp parameter.</p>
   */
  WormGraceUntilDate?: Date;

  /**
   * <p>Specifies whether you want to apply a Legal Hold to the uploaded object.</p>
   */
  ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace CreateMultipartUploadRequest {
  export const filterSensitiveLog = (obj: CreateMultipartUploadRequest): any => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
    ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }),
  });
}

export type SnapshotType = "manual" | "system";

export interface Snapshot {
  /**
   * <p>快照ID</p>
   */
  ID?: string;

  /**
   * <p>快照类型</p>
   */
  Type?: SnapshotType | string;

  /**
   * <p>快照名称</p>
   */
  Name?: string;

  /**
   * <p>快照描述</p>
   */
  Description?: string;

  /**
   * <p>快照创建日期</p>
   */
  CreateDate?: Date;

  /**
   * <p>快照创建日期</p>
   */
  CreateTime?: Date;
}

export namespace Snapshot {
  export const filterSensitiveLog = (obj: Snapshot): any => ({
    ...obj,
  });
}

export interface CreateSnapshotRequest {
  /**
   * <p>桶名</p>
   */
  Bucket: string | undefined;

  /**
   * <p>回收站配置信息</p>
   */
  Snapshot?: Snapshot;
}

export namespace CreateSnapshotRequest {
  export const filterSensitiveLog = (obj: CreateSnapshotRequest): any => ({
    ...obj,
  });
}

export interface SnapshotPolicyPeriod {
  /**
   * <p>天</p>
   */
  Day?: number;

  /**
   * <p>小时</p>
   */
  Hour?: number;
}

export namespace SnapshotPolicyPeriod {
  export const filterSensitiveLog = (obj: SnapshotPolicyPeriod): any => ({
    ...obj,
  });
}

export interface SnapshotPolicy {
  /**
   * <p>快照策略类型</p>
   */
  Type?: SnapshotType | string;

  /**
   * <p>快照策略前缀</p>
   */
  SnapshotPrefix?: string;

  /**
   * <p>快照策略周期</p>
   */
  CreatePeriod?: SnapshotPolicyPeriod;

  /**
   * <p>保留数量</p>
   */
  SnapshotReservedNum?: number;

  /**
   * <p>空间删除策略</p>
   */
  EnableSpacePolicy?: boolean;

  /**
   * <p>快照描述</p>
   */
  Description?: string;
}

export namespace SnapshotPolicy {
  export const filterSensitiveLog = (obj: SnapshotPolicy): any => ({
    ...obj,
  });
}

export interface CreateSnapshotPolicyRequest {
  /**
   * <p>桶名</p>
   */
  Bucket: string | undefined;

  /**
   * <p>快照策略配置信息</p>
   */
  SnapshotPolicy?: SnapshotPolicy;
}

export namespace CreateSnapshotPolicyRequest {
  export const filterSensitiveLog = (obj: CreateSnapshotPolicyRequest): any => ({
    ...obj,
  });
}

export interface Stat {
  /**
   * <p>必选，重删域信息，枚举值SYSTEM, POOL</p>
   */
  Region?: string;

  /**
   * <p>开启重删后上传的对象数量</p>
   */
  Num?: number;

  /**
   * <p>开启重删后上传的对象容量</p>
   */
  Size?: number;

  /**
   * <p>重删对象数量</p>
   */
  DedupNum?: number;

  /**
   * <p>重删对象容量</p>
   */
  DedupSize?: number;

  /**
   * <p>在region为POOL_REDUNDANCY 时存在</p>
   */
  Redundancy?: string;
}

export namespace Stat {
  export const filterSensitiveLog = (obj: Stat): any => ({
    ...obj,
  });
}

export interface DedupstatOutput {
  /**
   * <p>系统重删返回数据</p>
   */
  Stat?: Stat;
}

export namespace DedupstatOutput {
  export const filterSensitiveLog = (obj: DedupstatOutput): any => ({
    ...obj,
  });
}

export interface DedupStatReq {
  /**
   * <p>必选，重删域信息，枚举值SYSTEM, POOL</p>
   */
  Region: string | undefined;

  /**
   * <p>必选，重删域信息，枚举值</p>
   */
  Value?: number;
}

export namespace DedupStatReq {
  export const filterSensitiveLog = (obj: DedupStatReq): any => ({
    ...obj,
  });
}

export interface DedupstatRequest {
  /**
   * <p>查询系统重删参数</p>
   */
  DedupStatReq?: DedupStatReq;
}

export namespace DedupstatRequest {
  export const filterSensitiveLog = (obj: DedupstatRequest): any => ({
    ...obj,
  });
}

export interface DeleteAgentsRequest {
  /**
   * <p>A standard MIME type describing the format of the object data.</p>
   */
  ContentType?: string;

  /**
   * <p>Agent 名称和IP的数组然后转成字符串传给后台</p>
   */
  AgentList: string | undefined;

  /**
   * <p>用于区分删除与后续的升级，删除池传delete</p>
   */
  action?: string;
}

export namespace DeleteAgentsRequest {
  export const filterSensitiveLog = (obj: DeleteAgentsRequest): any => ({
    ...obj,
  });
}

export interface DeleteBucketRequest {
  /**
   * <p>Specifies the bucket being deleted.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace DeleteBucketRequest {
  export const filterSensitiveLog = (obj: DeleteBucketRequest): any => ({
    ...obj,
  });
}

export interface DeleteBucketAdrRequest {
  /**
   * <p>The name of the bucket from which an analytics configuration is deleted.</p>
   */
  Bucket: string | undefined;
}

export namespace DeleteBucketAdrRequest {
  export const filterSensitiveLog = (obj: DeleteBucketAdrRequest): any => ({
    ...obj,
  });
}

export interface DeleteBucketAnalyticsConfigurationRequest {
  /**
   * <p>The name of the bucket from which an analytics configuration is deleted.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The ID that identifies the analytics configuration.</p>
   */
  Id: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace DeleteBucketAnalyticsConfigurationRequest {
  export const filterSensitiveLog = (obj: DeleteBucketAnalyticsConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DeleteBucketBtsRequest {
  /**
   * <p>Specifies the bucket whose <code>bts</code> configuration is being deleted.</p>
   */
  Bucket: string | undefined;
}

export namespace DeleteBucketBtsRequest {
  export const filterSensitiveLog = (obj: DeleteBucketBtsRequest): any => ({
    ...obj,
  });
}

export interface DeleteBucketCompressionConfigurationRequest {
  /**
   * <p>Bucket</p>
   */
  Bucket: string | undefined;
}

export namespace DeleteBucketCompressionConfigurationRequest {
  export const filterSensitiveLog = (obj: DeleteBucketCompressionConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DeleteBucketCorsRequest {
  /**
   * <p>Specifies the bucket whose <code>cors</code> configuration is being deleted.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace DeleteBucketCorsRequest {
  export const filterSensitiveLog = (obj: DeleteBucketCorsRequest): any => ({
    ...obj,
  });
}

export interface DeleteBucketDedupRequest {
  /**
   * <p>关闭重删参数</p>
   */
  Bucket: string | undefined;
}

export namespace DeleteBucketDedupRequest {
  export const filterSensitiveLog = (obj: DeleteBucketDedupRequest): any => ({
    ...obj,
  });
}

export interface DeleteBucketEncryptionRequest {
  /**
   * <p>The name of the bucket containing the server-side encryption configuration to
   *          delete.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace DeleteBucketEncryptionRequest {
  export const filterSensitiveLog = (obj: DeleteBucketEncryptionRequest): any => ({
    ...obj,
  });
}

export interface DeleteBucketIntelligentTieringConfigurationRequest {
  /**
   * <p>The name of the Amazon S3 bucket whose configuration you want to modify or retrieve.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The ID used to identify the S3 Intelligent-Tiering configuration.</p>
   */
  Id: string | undefined;
}

export namespace DeleteBucketIntelligentTieringConfigurationRequest {
  export const filterSensitiveLog = (obj: DeleteBucketIntelligentTieringConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DeleteBucketInventoryConfigurationRequest {
  /**
   * <p>The name of the bucket containing the inventory configuration to delete.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The ID used to identify the inventory configuration.</p>
   */
  Id: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace DeleteBucketInventoryConfigurationRequest {
  export const filterSensitiveLog = (obj: DeleteBucketInventoryConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DeleteBucketLifecycleRequest {
  /**
   * <p>The bucket name of the lifecycle to delete.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace DeleteBucketLifecycleRequest {
  export const filterSensitiveLog = (obj: DeleteBucketLifecycleRequest): any => ({
    ...obj,
  });
}

export interface DeleteBucketMetricsConfigurationRequest {
  /**
   * <p>The name of the bucket containing the metrics configuration to delete.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The ID used to identify the metrics configuration.</p>
   */
  Id: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace DeleteBucketMetricsConfigurationRequest {
  export const filterSensitiveLog = (obj: DeleteBucketMetricsConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DeleteBucketObjsTrashOutput {
  /**
   * <p>Container element for a successful delete. It identifies the object that was
   *          successfully deleted.</p>
   */
  Deleted?: DeletedObject[];

  /**
   * <p>Container for a failed delete operation that describes the object that Amazon S3 attempted to
   *          delete and the error it encountered.</p>
   */
  Errors?: _Error[];
}

export namespace DeleteBucketObjsTrashOutput {
  export const filterSensitiveLog = (obj: DeleteBucketObjsTrashOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Container for the objects to delete.</p>
 */
export interface Delete {
  /**
   * <p>The objects to delete.</p>
   */
  Objects: ObjectIdentifier[] | undefined;

  /**
   * <p>Element to enable quiet mode for the request. When you add this element, you must set
   *          its value to true.</p>
   */
  Quiet?: boolean;
}

export namespace Delete {
  export const filterSensitiveLog = (obj: Delete): any => ({
    ...obj,
  });
}

export type EncodingType = "url";

export interface DeleteBucketObjsTrashRequest {
  /**
   * <p>桶名</p>
   */
  Bucket: string | undefined;

  /**
   * <p>对象信息</p>
   */
  Delete: Delete | undefined;

  /**
   * <p>Requests Amazon S3 to encode the object keys in the response and specifies the encoding
   *          method to use. An object key may contain any Unicode character; however, XML 1.0 parser
   *          cannot parse some characters, such as characters with an ASCII value from 0 to 10. For
   *          characters that are not supported in XML 1.0, you can add this parameter to request that
   *          Amazon S3 encode the keys in the response.</p>
   */
  EncodingType?: EncodingType | string;
}

export namespace DeleteBucketObjsTrashRequest {
  export const filterSensitiveLog = (obj: DeleteBucketObjsTrashRequest): any => ({
    ...obj,
  });
}

export interface DeleteBucketObjTrashRequest {
  /**
   * <p>桶名</p>
   */
  Bucket: string | undefined;

  /**
   * <p>当前软链接名称</p>
   */
  Key: string | undefined;

  /**
   * <p>A token to allow Object Lock to be enabled for an existing bucket.</p>
   */
  Token: string | undefined;
}

export namespace DeleteBucketObjTrashRequest {
  export const filterSensitiveLog = (obj: DeleteBucketObjTrashRequest): any => ({
    ...obj,
  });
}

export interface DeleteBucketOwnershipControlsRequest {
  /**
   * <p>The Amazon S3 bucket whose <code>OwnershipControls</code> you want to delete. </p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace DeleteBucketOwnershipControlsRequest {
  export const filterSensitiveLog = (obj: DeleteBucketOwnershipControlsRequest): any => ({
    ...obj,
  });
}

export interface DeleteBucketPolicyRequest {
  /**
   * <p>The bucket name.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace DeleteBucketPolicyRequest {
  export const filterSensitiveLog = (obj: DeleteBucketPolicyRequest): any => ({
    ...obj,
  });
}

export interface DeleteBucketQoSRequest {
  /**
   * <p>The name of the bucket from which an analytics configuration is deleted.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace DeleteBucketQoSRequest {
  export const filterSensitiveLog = (obj: DeleteBucketQoSRequest): any => ({
    ...obj,
  });
}

export interface DeleteBucketReplicationRequest {
  /**
   * <p> The bucket name. </p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace DeleteBucketReplicationRequest {
  export const filterSensitiveLog = (obj: DeleteBucketReplicationRequest): any => ({
    ...obj,
  });
}

export interface DeleteBucketSnapshotRequest {
  /**
   * <p>The name of the bucket from which an analytics configuration is deleted.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Snapshot Name</p>
   */
  Name?: string;
}

export namespace DeleteBucketSnapshotRequest {
  export const filterSensitiveLog = (obj: DeleteBucketSnapshotRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Snapshot Identifier is unique value to identify snapshots.</p>
 */
export interface SnapshotIdentifier {
  /**
   * <p>Name of the snapshot to delete.</p>
   */
  Name: string | undefined;
}

export namespace SnapshotIdentifier {
  export const filterSensitiveLog = (obj: SnapshotIdentifier): any => ({
    ...obj,
  });
}

export interface DeleteBucketSnapshotsOutput {
  /**
   * <p>Container element for a successful delete. It identifies the snapshot that was successfully deleted.</p>
   */
  Deleted?: SnapshotIdentifier[];

  /**
   * <p>Container for a failed delete operation that describes the snapshot that Amazon S3 attempted to delete and the error it encountered.</p>
   */
  Errors?: _Error[];
}

export namespace DeleteBucketSnapshotsOutput {
  export const filterSensitiveLog = (obj: DeleteBucketSnapshotsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Container for the objects to delete.</p>
 */
export interface SnapshotDelete {
  /**
   * <p>The Snapshots to delete.</p>
   */
  Snapshots: SnapshotIdentifier[] | undefined;
}

export namespace SnapshotDelete {
  export const filterSensitiveLog = (obj: SnapshotDelete): any => ({
    ...obj,
  });
}

export interface DeleteBucketSnapshotsRequest {
  /**
   * <p>The bucket name containing the objects to delete. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Container for the request.</p>
   */
  Delete: SnapshotDelete | undefined;
}

export namespace DeleteBucketSnapshotsRequest {
  export const filterSensitiveLog = (obj: DeleteBucketSnapshotsRequest): any => ({
    ...obj,
  });
}

export interface DeleteBucketStatisticRequest {
  /**
   * <p>获取桶统计计量配置请求参数</p>
   */
  Bucket: string | undefined;
}

export namespace DeleteBucketStatisticRequest {
  export const filterSensitiveLog = (obj: DeleteBucketStatisticRequest): any => ({
    ...obj,
  });
}

export interface DeleteBucketTaggingRequest {
  /**
   * <p>The bucket that has the tag set to be removed.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace DeleteBucketTaggingRequest {
  export const filterSensitiveLog = (obj: DeleteBucketTaggingRequest): any => ({
    ...obj,
  });
}

export interface DeleteBucketTrashRequest {
  /**
   * <p>桶名称</p>
   */
  Bucket: string | undefined;

  /**
   * <p>当前桶所属账户</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace DeleteBucketTrashRequest {
  export const filterSensitiveLog = (obj: DeleteBucketTrashRequest): any => ({
    ...obj,
  });
}

export interface DeleteBucketWebsiteRequest {
  /**
   * <p>The bucket name for which you want to remove the website configuration. </p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace DeleteBucketWebsiteRequest {
  export const filterSensitiveLog = (obj: DeleteBucketWebsiteRequest): any => ({
    ...obj,
  });
}

export interface DeleteMetaSearchRequest {
  /**
   * <p>The bucket name of the lifecycle to delete.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace DeleteMetaSearchRequest {
  export const filterSensitiveLog = (obj: DeleteMetaSearchRequest): any => ({
    ...obj,
  });
}

export interface DeleteObjectOutput {
  /**
   * <p>Specifies whether the versioned object that was permanently deleted was (true) or was
   *          not (false) a delete marker.</p>
   */
  DeleteMarker?: boolean;

  /**
   * <p>Returns the version ID of the delete marker created as a result of the DELETE
   *          operation.</p>
   */
  VersionId?: string;

  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace DeleteObjectOutput {
  export const filterSensitiveLog = (obj: DeleteObjectOutput): any => ({
    ...obj,
  });
}

export interface DeleteObjectRequest {
  /**
   * <p>The bucket name of the bucket containing the object. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Key name of the object to delete.</p>
   */
  Key: string | undefined;

  /**
   * <p>The concatenation of the authentication device's serial number, a space, and the value
   *          that is displayed on your authentication device. Required to permanently delete a versioned
   *          object if versioning is configured with MFA delete enabled.</p>
   */
  MFA?: string;

  /**
   * <p>VersionId used to reference a specific version of the object.</p>
   */
  VersionId?: string;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>Indicates whether S3 Object Lock should bypass Governance-mode restrictions to process
   *          this operation.</p>
   */
  BypassGovernanceRetention?: boolean;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace DeleteObjectRequest {
  export const filterSensitiveLog = (obj: DeleteObjectRequest): any => ({
    ...obj,
  });
}

export interface DeleteObjectsOutput {
  /**
   * <p>Container element for a successful delete. It identifies the object that was
   *          successfully deleted.</p>
   */
  Deleted?: DeletedObject[];

  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;

  /**
   * <p>Container for a failed delete operation that describes the object that Amazon S3 attempted to
   *          delete and the error it encountered.</p>
   */
  Errors?: _Error[];
}

export namespace DeleteObjectsOutput {
  export const filterSensitiveLog = (obj: DeleteObjectsOutput): any => ({
    ...obj,
  });
}

export interface DeleteObjectsRequest {
  /**
   * <p>The bucket name containing the objects to delete. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Container for the request.</p>
   */
  Delete: Delete | undefined;

  /**
   * <p>The concatenation of the authentication device's serial number, a space, and the value
   *          that is displayed on your authentication device. Required to permanently delete a versioned
   *          object if versioning is configured with MFA delete enabled.</p>
   */
  MFA?: string;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>Specifies whether you want to delete this object even if it has a Governance-type Object
   *          Lock in place. You must have sufficient permissions to perform this operation.</p>
   */
  BypassGovernanceRetention?: boolean;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace DeleteObjectsRequest {
  export const filterSensitiveLog = (obj: DeleteObjectsRequest): any => ({
    ...obj,
  });
}

export interface DeleteObjectTaggingOutput {
  /**
   * <p>The versionId of the object the tag-set was removed from.</p>
   */
  VersionId?: string;
}

export namespace DeleteObjectTaggingOutput {
  export const filterSensitiveLog = (obj: DeleteObjectTaggingOutput): any => ({
    ...obj,
  });
}

export interface DeleteObjectTaggingRequest {
  /**
   * <p>The bucket name containing the objects from which to remove the tags. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Name of the object key.</p>
   */
  Key: string | undefined;

  /**
   * <p>The versionId of the object that the tag-set will be removed from.</p>
   */
  VersionId?: string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace DeleteObjectTaggingRequest {
  export const filterSensitiveLog = (obj: DeleteObjectTaggingRequest): any => ({
    ...obj,
  });
}

export interface DeleteOSCPRequest {
  /**
   * <p>The bucket name of the lifecycle to delete.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace DeleteOSCPRequest {
  export const filterSensitiveLog = (obj: DeleteOSCPRequest): any => ({
    ...obj,
  });
}

export interface DeletePublicAccessBlockRequest {
  /**
   * <p>The Amazon S3 bucket whose <code>PublicAccessBlock</code> configuration you want to delete.
   *       </p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace DeletePublicAccessBlockRequest {
  export const filterSensitiveLog = (obj: DeletePublicAccessBlockRequest): any => ({
    ...obj,
  });
}

export interface DeleteRefererRequest {
  /**
   * <p>The name of the Amazon S3 bucket whose <code>PublicAccessBlock</code> configuration you want
   *          to retrieve. </p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace DeleteRefererRequest {
  export const filterSensitiveLog = (obj: DeleteRefererRequest): any => ({
    ...obj,
  });
}

export interface DeleteSingleAgentRequest {
  /**
   * <p>Agent 名称</p>
   */
  name: string | undefined;
}

export namespace DeleteSingleAgentRequest {
  export const filterSensitiveLog = (obj: DeleteSingleAgentRequest): any => ({
    ...obj,
  });
}

export interface DeleteSnapshotRequest {
  /**
   * <p>桶名</p>
   */
  Bucket: string | undefined;

  /**
   * <p>快照名</p>
   */
  SnapshotName?: string;
}

export namespace DeleteSnapshotRequest {
  export const filterSensitiveLog = (obj: DeleteSnapshotRequest): any => ({
    ...obj,
  });
}

export interface DeleteSnapshotPolicyRequest {
  /**
   * <p>桶名</p>
   */
  Bucket: string | undefined;
}

export namespace DeleteSnapshotPolicyRequest {
  export const filterSensitiveLog = (obj: DeleteSnapshotPolicyRequest): any => ({
    ...obj,
  });
}

export interface DeleteSnapshotInfo {
  /**
   * <p>快照名称</p>
   */
  Names?: string[];
}

export namespace DeleteSnapshotInfo {
  export const filterSensitiveLog = (obj: DeleteSnapshotInfo): any => ({
    ...obj,
  });
}

export interface DeleteSnapshotsRequest {
  /**
   * <p>桶名</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The Snapshots.</p>
   */
  Snapshot?: DeleteSnapshotInfo;
}

export namespace DeleteSnapshotsRequest {
  export const filterSensitiveLog = (obj: DeleteSnapshotsRequest): any => ({
    ...obj,
  });
}

export interface GetAgentConfigOutput {
  /**
   * <p>查询单个agent配置时返回字符串，与批量配置时的Config字段一致</p>
   */
  AgentConfig?: string;
}

export namespace GetAgentConfigOutput {
  export const filterSensitiveLog = (obj: GetAgentConfigOutput): any => ({
    ...obj,
  });
}

export interface GetAgentConfigRequest {
  /**
   * <p>Agent 名称</p>
   */
  name?: string;
}

export namespace GetAgentConfigRequest {
  export const filterSensitiveLog = (obj: GetAgentConfigRequest): any => ({
    ...obj,
  });
}

export interface PolicySourceGroup {
  /**
   * <p>路径名称</p>
   */
  Name?: string;
}

export namespace PolicySourceGroup {
  export const filterSensitiveLog = (obj: PolicySourceGroup): any => ({
    ...obj,
  });
}

export interface StringTypeListAgentDirectoryResult {
  /**
   * <p>MaxKey</p>
   */
  MaxKeys?: number;

  /**
   * <p>       for a subsequent request.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>如果marker为空，则认为是列举盘符；如果最后一个字符是\,则认为是列举这个文件夹下面的目录；如果最后一个字符不是\。则认为是继续根据这个文件夹列举</p>
   */
  Marker?: string;

  /**
   * <p>--</p>
   */
  NextMarker?: string;

  /**
   * <p>返回当前迁移路径列表数据</p>
   */
  Directory?: PolicySourceGroup[];
}

export namespace StringTypeListAgentDirectoryResult {
  export const filterSensitiveLog = (obj: StringTypeListAgentDirectoryResult): any => ({
    ...obj,
  });
}

export interface GetAgentPathConfigOutput {
  /**
   * <p>返回迁移路径数据</p>
   */
  ListAgentDirectoryResult?: StringTypeListAgentDirectoryResult;
}

export namespace GetAgentPathConfigOutput {
  export const filterSensitiveLog = (obj: GetAgentPathConfigOutput): any => ({
    ...obj,
  });
}

export interface GetAgentPathConfigRequest {
  /**
   * <p>Agent 名称</p>
   */
  name?: string;

  /**
   * <p>Agent IP地址</p>
   */
  ip?: string;

  /**
   * <p>获取路径的上一级路径。如果传空，则列举盘符；如果传值最后一个字符为\(一个字符，这里转译了)，则列举这个文件夹下面的路径；如果传值最后一个字符不是\，则继续列举这个文件夹同级的文件夹</p>
   */
  marker?: string;
}

export namespace GetAgentPathConfigRequest {
  export const filterSensitiveLog = (obj: GetAgentPathConfigRequest): any => ({
    ...obj,
  });
}

export interface GetBucketAccelerateConfigurationOutput {
  /**
   * <p>The accelerate configuration of the bucket.</p>
   */
  Status?: BucketAccelerateStatus | string;
}

export namespace GetBucketAccelerateConfigurationOutput {
  export const filterSensitiveLog = (obj: GetBucketAccelerateConfigurationOutput): any => ({
    ...obj,
  });
}

export interface GetBucketAccelerateConfigurationRequest {
  /**
   * <p>The name of the bucket for which the accelerate configuration is retrieved.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetBucketAccelerateConfigurationRequest {
  export const filterSensitiveLog = (obj: GetBucketAccelerateConfigurationRequest): any => ({
    ...obj,
  });
}

export interface GetBucketAclOutput {
  /**
   * <p>Container for the bucket owner's display name and ID.</p>
   */
  Owner?: Owner;

  /**
   * <p>A list of grants.</p>
   */
  Grants?: Grant[];
}

export namespace GetBucketAclOutput {
  export const filterSensitiveLog = (obj: GetBucketAclOutput): any => ({
    ...obj,
  });
}

export interface GetBucketAclRequest {
  /**
   * <p>Specifies the S3 bucket whose ACL is being requested.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetBucketAclRequest {
  export const filterSensitiveLog = (obj: GetBucketAclRequest): any => ({
    ...obj,
  });
}

export interface GetBucketAdrRequest {
  /**
   * <p>桶名</p>
   */
  Bucket: string | undefined;
}

export namespace GetBucketAdrRequest {
  export const filterSensitiveLog = (obj: GetBucketAdrRequest): any => ({
    ...obj,
  });
}

export interface ArchiveDirectReadConfiguration {
  Status?: string;
  Enabled?: boolean;
  Mode?: string;
  CacheConfiguration?: AdrCacheConfiguration;
  /**
   * <p>Container for a 归档直读 rule.</p>
   */
  Rules?: AdrRule[];
}

export namespace ArchiveDirectReadConfiguration {
  export const filterSensitiveLog = (obj: ArchiveDirectReadConfiguration): any => ({
    ...obj,
  });
}

export interface GetBucketAdrResponse {
  /**
   * <p>The <code>GetBucketAdr</code> of bucket.</p>
   */
  ArchiveDirectReadConfiguration?: ArchiveDirectReadConfiguration;
}

export namespace GetBucketAdrResponse {
  export const filterSensitiveLog = (obj: GetBucketAdrResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A container of a key value name pair.</p>
 */
export interface Tag {
  /**
   * <p>Name of the object key.</p>
   */
  Key: string | undefined;

  /**
   * <p>Value of the tag.</p>
   */
  Value: string | undefined;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

/**
 * <p>A conjunction (logical AND) of predicates, which is used in evaluating a metrics filter.
 *          The operator must have at least two predicates in any combination, and an object must match
 *          all of the predicates for the filter to apply.</p>
 */
export interface AnalyticsAndOperator {
  /**
   * <p>The prefix to use when evaluating an AND predicate: The prefix that an object must have
   *          to be included in the metrics results.</p>
   */
  Prefix?: string;

  /**
   * <p>The list of tags to use when evaluating an AND predicate.</p>
   */
  Tags?: Tag[];
}

export namespace AnalyticsAndOperator {
  export const filterSensitiveLog = (obj: AnalyticsAndOperator): any => ({
    ...obj,
  });
}

/**
 * <p>The filter used to describe a set of objects for analyses. A filter must have exactly
 *          one prefix, one tag, or one conjunction (AnalyticsAndOperator). If no filter is provided,
 *          all objects will be considered in any analysis.</p>
 */
export type AnalyticsFilter =
  | AnalyticsFilter.AndMember
  | AnalyticsFilter.PrefixMember
  | AnalyticsFilter.TagMember
  | AnalyticsFilter.$UnknownMember;

export namespace AnalyticsFilter {
  /**
   * <p>The prefix to use when evaluating an analytics filter.</p>
   */
  export interface PrefixMember {
    Prefix: string;
    Tag?: never;
    And?: never;
    $unknown?: never;
  }

  /**
   * <p>The tag to use when evaluating an analytics filter.</p>
   */
  export interface TagMember {
    Prefix?: never;
    Tag: Tag;
    And?: never;
    $unknown?: never;
  }

  /**
   * <p>A conjunction (logical AND) of predicates, which is used in evaluating an analytics
   *          filter. The operator must have at least two predicates.</p>
   */
  export interface AndMember {
    Prefix?: never;
    Tag?: never;
    And: AnalyticsAndOperator;
    $unknown?: never;
  }

  export interface $UnknownMember {
    Prefix?: never;
    Tag?: never;
    And?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Prefix: (value: string) => T;
    Tag: (value: Tag) => T;
    And: (value: AnalyticsAndOperator) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AnalyticsFilter, visitor: Visitor<T>): T => {
    if (value.Prefix !== undefined) return visitor.Prefix(value.Prefix);
    if (value.Tag !== undefined) return visitor.Tag(value.Tag);
    if (value.And !== undefined) return visitor.And(value.And);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  export const filterSensitiveLog = (obj: AnalyticsFilter): any => {
    if (obj.Prefix !== undefined) return { Prefix: obj.Prefix };
    if (obj.Tag !== undefined) return { Tag: Tag.filterSensitiveLog(obj.Tag) };
    if (obj.And !== undefined) return { And: AnalyticsAndOperator.filterSensitiveLog(obj.And) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

export type AnalyticsS3ExportFileFormat = "CSV";

/**
 * <p>Contains information about where to publish the analytics results.</p>
 */
export interface AnalyticsS3BucketDestination {
  /**
   * <p>Specifies the file format used when exporting data to Amazon S3.</p>
   */
  Format: AnalyticsS3ExportFileFormat | string | undefined;

  /**
   * <p>The account ID that owns the destination S3 bucket. If no account ID is provided, the
   *          owner is not validated before exporting data.</p>
   *          <note>
   *             <p> Although this value is optional, we strongly recommend that you set it to help
   *             prevent problems if the destination bucket ownership changes. </p>
   *          </note>
   */
  BucketAccountId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the bucket to which data is exported.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The prefix to use when exporting data. The prefix is prepended to all results.</p>
   */
  Prefix?: string;
}

export namespace AnalyticsS3BucketDestination {
  export const filterSensitiveLog = (obj: AnalyticsS3BucketDestination): any => ({
    ...obj,
  });
}

/**
 * <p>Where to publish the analytics results.</p>
 */
export interface AnalyticsExportDestination {
  /**
   * <p>A destination signifying output to an S3 bucket.</p>
   */
  S3BucketDestination: AnalyticsS3BucketDestination | undefined;
}

export namespace AnalyticsExportDestination {
  export const filterSensitiveLog = (obj: AnalyticsExportDestination): any => ({
    ...obj,
  });
}

export type StorageClassAnalysisSchemaVersion = "V_1";

/**
 * <p>Container for data related to the storage class analysis for an Amazon S3 bucket for
 *          export.</p>
 */
export interface StorageClassAnalysisDataExport {
  /**
   * <p>The version of the output schema to use when exporting data. Must be
   *          <code>V_1</code>.</p>
   */
  OutputSchemaVersion: StorageClassAnalysisSchemaVersion | string | undefined;

  /**
   * <p>The place to store the data for an analysis.</p>
   */
  Destination: AnalyticsExportDestination | undefined;
}

export namespace StorageClassAnalysisDataExport {
  export const filterSensitiveLog = (obj: StorageClassAnalysisDataExport): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies data related to access patterns to be collected and made available to analyze
 *          the tradeoffs between different storage classes for an Amazon S3 bucket.</p>
 */
export interface StorageClassAnalysis {
  /**
   * <p>Specifies how data related to the storage class analysis for an Amazon S3 bucket should be
   *          exported.</p>
   */
  DataExport?: StorageClassAnalysisDataExport;
}

export namespace StorageClassAnalysis {
  export const filterSensitiveLog = (obj: StorageClassAnalysis): any => ({
    ...obj,
  });
}

/**
 * <p> Specifies the configuration and any analyses for the analytics filter of an Amazon S3
 *          bucket.</p>
 */
export interface AnalyticsConfiguration {
  /**
   * <p>The ID that identifies the analytics configuration.</p>
   */
  Id: string | undefined;

  /**
   * <p>The filter used to describe a set of objects for analyses. A filter must have exactly
   *          one prefix, one tag, or one conjunction (AnalyticsAndOperator). If no filter is provided,
   *          all objects will be considered in any analysis.</p>
   */
  Filter?: AnalyticsFilter;

  /**
   * <p> Contains data related to access patterns to be collected and made available to analyze
   *          the tradeoffs between different storage classes. </p>
   */
  StorageClassAnalysis: StorageClassAnalysis | undefined;
}

export namespace AnalyticsConfiguration {
  export const filterSensitiveLog = (obj: AnalyticsConfiguration): any => ({
    ...obj,
    ...(obj.Filter && { Filter: AnalyticsFilter.filterSensitiveLog(obj.Filter) }),
  });
}

export interface GetBucketAnalyticsConfigurationOutput {
  /**
   * <p>The configuration and any analyses for the analytics filter.</p>
   */
  AnalyticsConfiguration?: AnalyticsConfiguration;
}

export namespace GetBucketAnalyticsConfigurationOutput {
  export const filterSensitiveLog = (obj: GetBucketAnalyticsConfigurationOutput): any => ({
    ...obj,
    ...(obj.AnalyticsConfiguration && {
      AnalyticsConfiguration: AnalyticsConfiguration.filterSensitiveLog(obj.AnalyticsConfiguration),
    }),
  });
}

export interface GetBucketAnalyticsConfigurationRequest {
  /**
   * <p>The name of the bucket from which an analytics configuration is retrieved.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The ID that identifies the analytics configuration.</p>
   */
  Id: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetBucketAnalyticsConfigurationRequest {
  export const filterSensitiveLog = (obj: GetBucketAnalyticsConfigurationRequest): any => ({
    ...obj,
  });
}

export interface GetBucketBtsOutput {
  /**
   * <p>The bucket bts as a JSON document.</p>
   */
  BtsRule?: string;
}

export namespace GetBucketBtsOutput {
  export const filterSensitiveLog = (obj: GetBucketBtsOutput): any => ({
    ...obj,
  });
}

export interface GetBucketBtsRequest {
  /**
   * <p>The bucket name for which to get the bts configuration.</p>
   */
  Bucket: string | undefined;
}

export namespace GetBucketBtsRequest {
  export const filterSensitiveLog = (obj: GetBucketBtsRequest): any => ({
    ...obj,
  });
}

export interface PrefixOrSuffix {
  /**
   * <p>Value</p>
   */
  Value?: string[];
}

export namespace PrefixOrSuffix {
  export const filterSensitiveLog = (obj: PrefixOrSuffix): any => ({
    ...obj,
  });
}

export interface NotOrCompressFilter {
  /**
   * <p>前缀</p>
   */
  Prefix?: PrefixOrSuffix;

  /**
   * <p>后缀</p>
   */
  Suffix?: PrefixOrSuffix;
}

export namespace NotOrCompressFilter {
  export const filterSensitiveLog = (obj: NotOrCompressFilter): any => ({
    ...obj,
  });
}

/**
 * <p>CompressionRule</p>
 */
export interface CompressionRule {
  /**
   * <p>CompressFilter</p>
   */
  CompressFilter?: NotOrCompressFilter;

  /**
   * <p>NotCompressFilter</p>
   */
  NotCompressFilter?: NotOrCompressFilter;
}

export namespace CompressionRule {
  export const filterSensitiveLog = (obj: CompressionRule): any => ({
    ...obj,
  });
}

export interface CompressionConfiguration {
  /**
   * <p>Mode</p>
   */
  Mode?: string;

  /**
   * <p>Status</p>
   */
  Status?: string;

  /**
   * <p>MinSize</p>
   */
  MinSize?: number;

  /**
   * <p>Container for a compression rule.</p>
   */
  Rule?: CompressionRule;
}

export namespace CompressionConfiguration {
  export const filterSensitiveLog = (obj: CompressionConfiguration): any => ({
    ...obj,
  });
}

export interface GetBucketCompressionConfigurationOutput {
  /**
   * <p>获取桶统计计量配置请求返回值</p>
   */
  CompressionConfiguration?: CompressionConfiguration;
}

export namespace GetBucketCompressionConfigurationOutput {
  export const filterSensitiveLog = (obj: GetBucketCompressionConfigurationOutput): any => ({
    ...obj,
  });
}

export interface GetBucketCompressionConfigurationRequest {
  /**
   * <p>The name of the bucket for which to get the compression information.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetBucketCompressionConfigurationRequest {
  export const filterSensitiveLog = (obj: GetBucketCompressionConfigurationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a cross-origin access rule for an Amazon S3 bucket.</p>
 */
export interface CORSRule {
  /**
   * <p>Headers that are specified in the <code>Access-Control-Request-Headers</code> header.
   *          These headers are allowed in a preflight OPTIONS request. In response to any preflight
   *          OPTIONS request, Amazon S3 returns any requested headers that are allowed.</p>
   */
  AllowedHeaders?: string[];

  /**
   * <p>An HTTP method that you allow the origin to execute. Valid values are <code>GET</code>,
   *             <code>PUT</code>, <code>HEAD</code>, <code>POST</code>, and <code>DELETE</code>.</p>
   */
  AllowedMethods: string[] | undefined;

  /**
   * <p>One or more origins you want customers to be able to access the bucket from.</p>
   */
  AllowedOrigins: string[] | undefined;

  /**
   * <p>One or more headers in the response that you want customers to be able to access from
   *          their applications (for example, from a JavaScript <code>XMLHttpRequest</code>
   *          object).</p>
   */
  ExposeHeaders?: string[];

  /**
   * <p>The time in seconds that your browser is to cache the preflight response for the
   *          specified resource.</p>
   */
  MaxAgeSeconds?: number;
}

export namespace CORSRule {
  export const filterSensitiveLog = (obj: CORSRule): any => ({
    ...obj,
  });
}

export interface GetBucketCorsOutput {
  /**
   * <p>A set of origins and methods (cross-origin access that you want to allow). You can add
   *          up to 100 rules to the configuration.</p>
   */
  CORSRules?: CORSRule[];
}

export namespace GetBucketCorsOutput {
  export const filterSensitiveLog = (obj: GetBucketCorsOutput): any => ({
    ...obj,
  });
}

export interface GetBucketCorsRequest {
  /**
   * <p>The bucket name for which to get the cors configuration.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetBucketCorsRequest {
  export const filterSensitiveLog = (obj: GetBucketCorsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the default server-side encryption to apply to new objects in the bucket. If a
 *          PUT Object request doesn't specify any server-side encryption, this default encryption will
 *          be applied. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTencryption.html">PUT Bucket encryption</a> in
 *          the <i>Amazon Simple Storage Service API Reference</i>.</p>
 */
export interface ServerSideEncryptionByDefault {
  /**
   * <p>Server-side encryption algorithm to use for the default encryption.</p>
   */
  SSEAlgorithm: ServerSideEncryption | string | undefined;

  /**
   * <p>AWS Key Management Service (KMS) customer master key ID to use for the default
   *          encryption. This parameter is allowed if and only if <code>SSEAlgorithm</code> is set to
   *             <code>aws:kms</code>.</p>
   *          <p>You can specify the key ID or the Amazon Resource Name (ARN) of the CMK. However, if you
   *          are using encryption with cross-account operations, you must use a fully qualified CMK ARN.
   *          For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html#bucket-encryption-update-bucket-policy">Using encryption for cross-account operations</a>. </p>
   *          <p>
   *             <b>For example:</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>Key ID: <code>1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Key ARN:
   *                   <code>arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <important>
   *             <p>Amazon S3 only supports symmetric CMKs and not asymmetric CMKs. For more information, see
   *                <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and
   *                Asymmetric Keys</a> in the <i>AWS Key Management Service Developer
   *                Guide</i>.</p>
   *          </important>
   */
  KMSMasterKeyID?: string;
}

export namespace ServerSideEncryptionByDefault {
  export const filterSensitiveLog = (obj: ServerSideEncryptionByDefault): any => ({
    ...obj,
    ...(obj.KMSMasterKeyID && { KMSMasterKeyID: SENSITIVE_STRING }),
  });
}

/**
 * <p>Specifies the default server-side encryption configuration.</p>
 */
export interface ServerSideEncryptionRule {
  /**
   * <p>Specifies the default server-side encryption to apply to new objects in the bucket. If a
   *          PUT Object request doesn't specify any server-side encryption, this default encryption will
   *          be applied.</p>
   */
  ApplyServerSideEncryptionByDefault?: ServerSideEncryptionByDefault;

  /**
   * <p>Specifies whether Amazon S3 should use an S3 Bucket Key with server-side encryption using KMS (SSE-KMS) for new objects in the bucket. Existing objects are not affected. Setting the <code>BucketKeyEnabled</code> element to <code>true</code> causes Amazon S3 to use an S3 Bucket Key. By default, S3 Bucket Key is not enabled.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-key.html">Amazon S3 Bucket Keys</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  BucketKeyEnabled?: boolean;
}

export namespace ServerSideEncryptionRule {
  export const filterSensitiveLog = (obj: ServerSideEncryptionRule): any => ({
    ...obj,
    ...(obj.ApplyServerSideEncryptionByDefault && {
      ApplyServerSideEncryptionByDefault: ServerSideEncryptionByDefault.filterSensitiveLog(
        obj.ApplyServerSideEncryptionByDefault
      ),
    }),
  });
}

export type Status = "Disabled" | "Enabled";

/**
 * <p>Specifies the default server-side-encryption configuration.</p>
 */
export interface ServerSideEncryptionConfiguration {
  /**
   * <p>Container for information about a particular server-side encryption configuration
   *          rule.</p>
   */
  Rules: ServerSideEncryptionRule[] | undefined;

  Algothrim?: string;
  Status?: Status | string;
  ServerSideEncryptionAlgorithm?: string;
}

export namespace ServerSideEncryptionConfiguration {
  export const filterSensitiveLog = (obj: ServerSideEncryptionConfiguration): any => ({
    ...obj,
    ...(obj.Rules && { Rules: obj.Rules.map((item) => ServerSideEncryptionRule.filterSensitiveLog(item)) }),
  });
}

export interface GetBucketEncryptionOutput {
  /**
   * <p>Specifies the default server-side-encryption configuration.</p>
   */
  ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
}

export namespace GetBucketEncryptionOutput {
  export const filterSensitiveLog = (obj: GetBucketEncryptionOutput): any => ({
    ...obj,
    ...(obj.ServerSideEncryptionConfiguration && {
      ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration.filterSensitiveLog(
        obj.ServerSideEncryptionConfiguration
      ),
    }),
  });
}

export interface GetBucketEncryptionRequest {
  /**
   * <p>The name of the bucket from which the server-side encryption configuration is
   *          retrieved.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetBucketEncryptionRequest {
  export const filterSensitiveLog = (obj: GetBucketEncryptionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A container for specifying S3 Intelligent-Tiering filters. The filters determine the
 *          subset of objects to which the rule applies.</p>
 */
export interface IntelligentTieringAndOperator {
  /**
   * <p>An object key name prefix that identifies the subset of objects to which the
   *          configuration applies.</p>
   */
  Prefix?: string;

  /**
   * <p>All of these tags must exist in the object's tag set in order for the configuration to
   *          apply.</p>
   */
  Tags?: Tag[];
}

export namespace IntelligentTieringAndOperator {
  export const filterSensitiveLog = (obj: IntelligentTieringAndOperator): any => ({
    ...obj,
  });
}

/**
 * <p>The <code>Filter</code> is used to identify objects that the S3 Intelligent-Tiering
 *          configuration applies to.</p>
 */
export interface IntelligentTieringFilter {
  /**
   * <p>An object key name prefix that identifies the subset of objects to which the rule
   *          applies.</p>
   */
  Prefix?: string;

  /**
   * <p>A container of a key value name pair.</p>
   */
  Tag?: Tag;

  /**
   * <p>A conjunction (logical AND) of predicates, which is used in evaluating a metrics filter.
   *          The operator must have at least two predicates, and an object must match all of the
   *          predicates in order for the filter to apply.</p>
   */
  And?: IntelligentTieringAndOperator;
}

export namespace IntelligentTieringFilter {
  export const filterSensitiveLog = (obj: IntelligentTieringFilter): any => ({
    ...obj,
  });
}

export type IntelligentTieringStatus = "Disabled" | "Enabled";

export type IntelligentTieringAccessTier = "ARCHIVE_ACCESS" | "DEEP_ARCHIVE_ACCESS";

/**
 * <p>The S3 Intelligent-Tiering storage class is designed to optimize storage costs by
 *          automatically moving data to the most cost-effective storage access tier, without
 *          additional operational overhead.</p>
 */
export interface Tiering {
  /**
   * <p>The number of consecutive days of no access after which an object will be eligible to be
   *          transitioned to the corresponding tier. The minimum number of days specified for
   *          Archive Access tier must be at least 90 days and Deep Archive Access tier must be at least
   *          180 days. The maximum can be up to 2 years (730 days).</p>
   */
  Days: number | undefined;

  /**
   * <p>S3 Intelligent-Tiering access tier. See <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html#sc-dynamic-data-access">Storage class for
   *             automatically optimizing frequently and infrequently accessed objects</a> for a list
   *          of access tiers in the S3 Intelligent-Tiering storage class.</p>
   */
  AccessTier: IntelligentTieringAccessTier | string | undefined;
}

export namespace Tiering {
  export const filterSensitiveLog = (obj: Tiering): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the S3 Intelligent-Tiering configuration for an Amazon S3 bucket.</p>
 *          <p>For information about the S3 Intelligent-Tiering storage class, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html#sc-dynamic-data-access">Storage class for
 *             automatically optimizing frequently and infrequently accessed objects</a>.</p>
 */
export interface IntelligentTieringConfiguration {
  /**
   * <p>The ID used to identify the S3 Intelligent-Tiering configuration.</p>
   */
  Id: string | undefined;

  /**
   * <p>Specifies a bucket filter. The configuration only includes objects that meet the
   *          filter's criteria.</p>
   */
  Filter?: IntelligentTieringFilter;

  /**
   * <p>Specifies the status of the configuration.</p>
   */
  Status: IntelligentTieringStatus | string | undefined;

  /**
   * <p>Specifies the S3 Intelligent-Tiering storage class tier of the configuration.</p>
   */
  Tierings: Tiering[] | undefined;
}

export namespace IntelligentTieringConfiguration {
  export const filterSensitiveLog = (obj: IntelligentTieringConfiguration): any => ({
    ...obj,
  });
}

export interface GetBucketIntelligentTieringConfigurationOutput {
  /**
   * <p>Container for S3 Intelligent-Tiering configuration.</p>
   */
  IntelligentTieringConfiguration?: IntelligentTieringConfiguration;
}

export namespace GetBucketIntelligentTieringConfigurationOutput {
  export const filterSensitiveLog = (obj: GetBucketIntelligentTieringConfigurationOutput): any => ({
    ...obj,
  });
}

export interface GetBucketIntelligentTieringConfigurationRequest {
  /**
   * <p>The name of the Amazon S3 bucket whose configuration you want to modify or retrieve.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The ID used to identify the S3 Intelligent-Tiering configuration.</p>
   */
  Id: string | undefined;
}

export namespace GetBucketIntelligentTieringConfigurationRequest {
  export const filterSensitiveLog = (obj: GetBucketIntelligentTieringConfigurationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the use of SSE-KMS to encrypt delivered inventory reports.</p>
 */
export interface SSEKMS {
  /**
   * <p>Specifies the ID of the AWS Key Management Service (AWS KMS) symmetric customer managed
   *          customer master key (CMK) to use for encrypting inventory reports.</p>
   */
  KeyId: string | undefined;
}

export namespace SSEKMS {
  export const filterSensitiveLog = (obj: SSEKMS): any => ({
    ...obj,
    ...(obj.KeyId && { KeyId: SENSITIVE_STRING }),
  });
}

/**
 * <p>Specifies the use of SSE-S3 to encrypt delivered inventory reports.</p>
 */
export interface SSES3 {}

export namespace SSES3 {
  export const filterSensitiveLog = (obj: SSES3): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the type of server-side encryption used to encrypt the inventory
 *          results.</p>
 */
export interface InventoryEncryption {
  /**
   * <p>Specifies the use of SSE-S3 to encrypt delivered inventory reports.</p>
   */
  SSES3?: SSES3;

  /**
   * <p>Specifies the use of SSE-KMS to encrypt delivered inventory reports.</p>
   */
  SSEKMS?: SSEKMS;
}

export namespace InventoryEncryption {
  export const filterSensitiveLog = (obj: InventoryEncryption): any => ({
    ...obj,
    ...(obj.SSEKMS && { SSEKMS: SSEKMS.filterSensitiveLog(obj.SSEKMS) }),
  });
}

export type InventoryFormat = "CSV" | "ORC" | "Parquet";

/**
 * <p>Contains the bucket name, file format, bucket owner (optional), and prefix (optional)
 *          where inventory results are published.</p>
 */
export interface InventoryS3BucketDestination {
  /**
   * <p>The account ID that owns the destination S3 bucket. If no account ID is provided, the
   *          owner is not validated before exporting data. </p>
   *          <note>
   *             <p> Although this value is optional, we strongly recommend that you set it to help
   *             prevent problems if the destination bucket ownership changes. </p>
   *          </note>
   */
  AccountId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the bucket where inventory results will be
   *          published.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Specifies the output format of the inventory results.</p>
   */
  Format: InventoryFormat | string | undefined;

  /**
   * <p>The prefix that is prepended to all inventory results.</p>
   */
  Prefix?: string;

  /**
   * <p>Contains the type of server-side encryption used to encrypt the inventory
   *          results.</p>
   */
  Encryption?: InventoryEncryption;
}

export namespace InventoryS3BucketDestination {
  export const filterSensitiveLog = (obj: InventoryS3BucketDestination): any => ({
    ...obj,
    ...(obj.Encryption && { Encryption: InventoryEncryption.filterSensitiveLog(obj.Encryption) }),
  });
}

/**
 * <p>Specifies the inventory configuration for an Amazon S3 bucket.</p>
 */
export interface InventoryDestination {
  /**
   * <p>Contains the bucket name, file format, bucket owner (optional), and prefix (optional)
   *          where inventory results are published.</p>
   */
  S3BucketDestination: InventoryS3BucketDestination | undefined;
}

export namespace InventoryDestination {
  export const filterSensitiveLog = (obj: InventoryDestination): any => ({
    ...obj,
    ...(obj.S3BucketDestination && {
      S3BucketDestination: InventoryS3BucketDestination.filterSensitiveLog(obj.S3BucketDestination),
    }),
  });
}

/**
 * <p>Specifies an inventory filter. The inventory only includes objects that meet the
 *          filter's criteria.</p>
 */
export interface InventoryFilter {
  /**
   * <p>The prefix that an object must have to be included in the inventory results.</p>
   */
  Prefix: string | undefined;
}

export namespace InventoryFilter {
  export const filterSensitiveLog = (obj: InventoryFilter): any => ({
    ...obj,
  });
}

export type InventoryIncludedObjectVersions = "All" | "Current";

export type InventoryOptionalField =
  | "ETag"
  | "EncryptionStatus"
  | "IntelligentTieringAccessTier"
  | "IsMultipartUploaded"
  | "LastModifiedDate"
  | "ObjectLockLegalHoldStatus"
  | "ObjectLockMode"
  | "ObjectLockRetainUntilDate"
  | "ReplicationStatus"
  | "Size"
  | "StorageClass";

export type InventoryFrequency = "Daily" | "Weekly";

/**
 * <p>Specifies the schedule for generating inventory results.</p>
 */
export interface InventorySchedule {
  /**
   * <p>Specifies how frequently inventory results are produced.</p>
   */
  Frequency: InventoryFrequency | string | undefined;
}

export namespace InventorySchedule {
  export const filterSensitiveLog = (obj: InventorySchedule): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the inventory configuration for an Amazon S3 bucket. For more information, see
 *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketGETInventoryConfig.html">GET Bucket inventory</a> in the <i>Amazon Simple Storage Service API Reference</i>.
 *       </p>
 */
export interface InventoryConfiguration {
  /**
   * <p>Contains information about where to publish the inventory results.</p>
   */
  Destination: InventoryDestination | undefined;

  /**
   * <p>Specifies whether the inventory is enabled or disabled. If set to <code>True</code>, an
   *          inventory list is generated. If set to <code>False</code>, no inventory list is
   *          generated.</p>
   */
  IsEnabled: boolean | undefined;

  /**
   * <p>Specifies an inventory filter. The inventory only includes objects that meet the
   *          filter's criteria.</p>
   */
  Filter?: InventoryFilter;

  /**
   * <p>The ID used to identify the inventory configuration.</p>
   */
  Id: string | undefined;

  /**
   * <p>Object versions to include in the inventory list. If set to <code>All</code>, the list
   *          includes all the object versions, which adds the version-related fields
   *             <code>VersionId</code>, <code>IsLatest</code>, and <code>DeleteMarker</code> to the
   *          list. If set to <code>Current</code>, the list does not contain these version-related
   *          fields.</p>
   */
  IncludedObjectVersions: InventoryIncludedObjectVersions | string | undefined;

  /**
   * <p>Contains the optional fields that are included in the inventory results.</p>
   */
  OptionalFields?: (InventoryOptionalField | string)[];

  /**
   * <p>Specifies the schedule for generating inventory results.</p>
   */
  Schedule: InventorySchedule | undefined;
}

export namespace InventoryConfiguration {
  export const filterSensitiveLog = (obj: InventoryConfiguration): any => ({
    ...obj,
    ...(obj.Destination && { Destination: InventoryDestination.filterSensitiveLog(obj.Destination) }),
  });
}

export interface GetBucketInventoryConfigurationOutput {
  /**
   * <p>Specifies the inventory configuration.</p>
   */
  InventoryConfiguration?: InventoryConfiguration;
}

export namespace GetBucketInventoryConfigurationOutput {
  export const filterSensitiveLog = (obj: GetBucketInventoryConfigurationOutput): any => ({
    ...obj,
    ...(obj.InventoryConfiguration && {
      InventoryConfiguration: InventoryConfiguration.filterSensitiveLog(obj.InventoryConfiguration),
    }),
  });
}

export interface GetBucketInventoryConfigurationRequest {
  /**
   * <p>The name of the bucket containing the inventory configuration to retrieve.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The ID used to identify the inventory configuration.</p>
   */
  Id: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetBucketInventoryConfigurationRequest {
  export const filterSensitiveLog = (obj: GetBucketInventoryConfigurationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Container for the expiration for the lifecycle of the object.</p>
 */
export interface LifecycleExpiration {
  /**
   * <p>Indicates at what date the object is to be moved or deleted. Should be in GMT ISO 8601
   *          Format.</p>
   */
  Date?: Date;

  /**
   * <p>Indicates the lifetime, in days, of the objects that are subject to the rule. The value
   *          must be a non-zero positive integer.</p>
   */
  Days?: number;

  /**
   * <p>The number of years that you want to specify for the default retention period.</p>
   */
  Hours?: number;

  /**
   * <p>The number of years that you want to specify for the default retention period.</p>
   */
  Minutes?: number;

  /**
   * <p>Indicates whether Amazon S3 will remove a delete marker with no noncurrent versions. If set
   *          to true, the delete marker will be expired; if set to false the policy takes no action.
   *          This cannot be specified with Days or Date in a Lifecycle Expiration Policy.</p>
   */
  ExpiredObjectDeleteMarker?: boolean;
}

export namespace LifecycleExpiration {
  export const filterSensitiveLog = (obj: LifecycleExpiration): any => ({
    ...obj,
  });
}

/**
 * <p>文件大小区间</p>
 */
export interface ObjectSizeRange {
  /**
   * <p>文件大小的较小值</p>
   */
  Start?: number;

  /**
   * <p>文件大小的较大值</p>
   */
  End?: number;
}

export namespace ObjectSizeRange {
  export const filterSensitiveLog = (obj: ObjectSizeRange): any => ({
    ...obj,
  });
}

/**
 * <p>This is used in a Lifecycle Rule Filter to apply a logical AND to two or more
 *          predicates. The Lifecycle Rule will apply to any object matching all of the predicates
 *          configured inside the And operator.</p>
 */
export interface LifecycleAndRuleOperator {
  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  Prefix?: string;

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  PrefixNotMatch?: string;

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  Suffix?: string;

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  SuffixNotMatch?: string;

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  ObjectSizeLessThan?: number;

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  ObjectSizeLessThanOrEqualTo?: number;

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  ObjectSizeEqualTo?: number;

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  ObjectSizeBetween?: ObjectSizeRange;

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  ObjectSizeGreaterThanOrEqualTo?: number;

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  ObjectSizeGreaterThan?: number;

  /**
   * <p>All of these tags must exist in the object's tag set in order for the rule to
   *          apply.</p>
   */
  Tags?: Tag[];
}

export namespace LifecycleAndRuleOperator {
  export const filterSensitiveLog = (obj: LifecycleAndRuleOperator): any => ({
    ...obj,
  });
}

export interface TagMultiInOrMode {
  /**
   * <p>All of these tags must exist in the object's tag set in order for the rule to
   *          apply.</p>
   */
  Tags?: Tag[];
}

export namespace TagMultiInOrMode {
  export const filterSensitiveLog = (obj: TagMultiInOrMode): any => ({
    ...obj,
  });
}

/**
 * <p>This is used in a Lifecycle Rule Filter to apply a logical AND to two or more
 *          predicates. The Lifecycle Rule will apply to any object matching all of the predicates
 *          configured inside the And operator.</p>
 */
export interface LifecycleOrRuleOperator {
  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  Prefix?: string;

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  PrefixNotMatch?: string;

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  Suffix?: string;

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  SuffixNotMatch?: string;

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  ObjectSizeLessThan?: number;

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  ObjectSizeLessThanOrEqualTo?: number;

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  ObjectSizeEqualTo?: number;

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  ObjectSizeBetween?: ObjectSizeRange;

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  ObjectSizeGreaterThanOrEqualTo?: number;

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  ObjectSizeGreaterThan?: number;

  /**
   * <p>All of these tags must exist in the object's tag set in order for the rule to
   *          apply.</p>
   */
  Tag?: Tag;

  /**
   * <p>All of these tags must exist in the object's tag set in order for the rule to
   *          apply.</p>
   */
  And?: TagMultiInOrMode;
}

export namespace LifecycleOrRuleOperator {
  export const filterSensitiveLog = (obj: LifecycleOrRuleOperator): any => ({
    ...obj,
  });
}

/**
 * <p>The <code>Filter</code> is used to identify objects that a Lifecycle Rule applies to. A
 *             <code>Filter</code> must have exactly one of <code>Prefix</code>, <code>Tag</code>, or
 *             <code>And</code> specified.</p>
 */
export type LifecycleRuleFilter =
  | LifecycleRuleFilter.AndMember
  | LifecycleRuleFilter.ObjectSizeBetweenMember
  | LifecycleRuleFilter.ObjectSizeEqualToMember
  | LifecycleRuleFilter.ObjectSizeGreaterThanMember
  | LifecycleRuleFilter.ObjectSizeGreaterThanOrEqualToMember
  | LifecycleRuleFilter.ObjectSizeLessThanMember
  | LifecycleRuleFilter.ObjectSizeLessThanOrEqualToMember
  | LifecycleRuleFilter.OrMember
  | LifecycleRuleFilter.PrefixMember
  | LifecycleRuleFilter.PrefixNotMatchMember
  | LifecycleRuleFilter.SuffixMember
  | LifecycleRuleFilter.SuffixNotMatchMember
  | LifecycleRuleFilter.TagMember
  | LifecycleRuleFilter.$UnknownMember;

export namespace LifecycleRuleFilter {
  /**
   * <p>This is used in a Lifecycle Rule Filter to apply a logical AND to two or more
   *          predicates. The Lifecycle Rule will apply to any object matching all of the predicates
   *          configured inside the And operator.</p>
   */
  export interface AndMember {
    And: LifecycleAndRuleOperator;
    Or?: never;
    Tag?: never;
    Prefix?: never;
    PrefixNotMatch?: never;
    Suffix?: never;
    SuffixNotMatch?: never;
    ObjectSizeLessThan?: never;
    ObjectSizeLessThanOrEqualTo?: never;
    ObjectSizeEqualTo?: never;
    ObjectSizeBetween?: never;
    ObjectSizeGreaterThanOrEqualTo?: never;
    ObjectSizeGreaterThan?: never;
    $unknown?: never;
  }

  /**
   * <p>This is used in a Lifecycle Rule Filter to apply a logical AND to two or more
   *          predicates. The Lifecycle Rule will apply to any object matching all of the predicates
   *          configured inside the And operator.</p>
   */
  export interface OrMember {
    And?: never;
    Or: LifecycleOrRuleOperator;
    Tag?: never;
    Prefix?: never;
    PrefixNotMatch?: never;
    Suffix?: never;
    SuffixNotMatch?: never;
    ObjectSizeLessThan?: never;
    ObjectSizeLessThanOrEqualTo?: never;
    ObjectSizeEqualTo?: never;
    ObjectSizeBetween?: never;
    ObjectSizeGreaterThanOrEqualTo?: never;
    ObjectSizeGreaterThan?: never;
    $unknown?: never;
  }

  /**
   * <p>All of these tags must exist in the object's tag set in order for the rule to
   *          apply.</p>
   */
  export interface TagMember {
    And?: never;
    Or?: never;
    Tag: Tag;
    Prefix?: never;
    PrefixNotMatch?: never;
    Suffix?: never;
    SuffixNotMatch?: never;
    ObjectSizeLessThan?: never;
    ObjectSizeLessThanOrEqualTo?: never;
    ObjectSizeEqualTo?: never;
    ObjectSizeBetween?: never;
    ObjectSizeGreaterThanOrEqualTo?: never;
    ObjectSizeGreaterThan?: never;
    $unknown?: never;
  }

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  export interface PrefixMember {
    And?: never;
    Or?: never;
    Tag?: never;
    Prefix: string;
    PrefixNotMatch?: never;
    Suffix?: never;
    SuffixNotMatch?: never;
    ObjectSizeLessThan?: never;
    ObjectSizeLessThanOrEqualTo?: never;
    ObjectSizeEqualTo?: never;
    ObjectSizeBetween?: never;
    ObjectSizeGreaterThanOrEqualTo?: never;
    ObjectSizeGreaterThan?: never;
    $unknown?: never;
  }

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  export interface PrefixNotMatchMember {
    And?: never;
    Or?: never;
    Tag?: never;
    Prefix?: never;
    PrefixNotMatch: string;
    Suffix?: never;
    SuffixNotMatch?: never;
    ObjectSizeLessThan?: never;
    ObjectSizeLessThanOrEqualTo?: never;
    ObjectSizeEqualTo?: never;
    ObjectSizeBetween?: never;
    ObjectSizeGreaterThanOrEqualTo?: never;
    ObjectSizeGreaterThan?: never;
    $unknown?: never;
  }

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  export interface SuffixMember {
    And?: never;
    Or?: never;
    Tag?: never;
    Prefix?: never;
    PrefixNotMatch?: never;
    Suffix: string;
    SuffixNotMatch?: never;
    ObjectSizeLessThan?: never;
    ObjectSizeLessThanOrEqualTo?: never;
    ObjectSizeEqualTo?: never;
    ObjectSizeBetween?: never;
    ObjectSizeGreaterThanOrEqualTo?: never;
    ObjectSizeGreaterThan?: never;
    $unknown?: never;
  }

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  export interface SuffixNotMatchMember {
    And?: never;
    Or?: never;
    Tag?: never;
    Prefix?: never;
    PrefixNotMatch?: never;
    Suffix?: never;
    SuffixNotMatch: string;
    ObjectSizeLessThan?: never;
    ObjectSizeLessThanOrEqualTo?: never;
    ObjectSizeEqualTo?: never;
    ObjectSizeBetween?: never;
    ObjectSizeGreaterThanOrEqualTo?: never;
    ObjectSizeGreaterThan?: never;
    $unknown?: never;
  }

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  export interface ObjectSizeLessThanMember {
    And?: never;
    Or?: never;
    Tag?: never;
    Prefix?: never;
    PrefixNotMatch?: never;
    Suffix?: never;
    SuffixNotMatch?: never;
    ObjectSizeLessThan: number;
    ObjectSizeLessThanOrEqualTo?: never;
    ObjectSizeEqualTo?: never;
    ObjectSizeBetween?: never;
    ObjectSizeGreaterThanOrEqualTo?: never;
    ObjectSizeGreaterThan?: never;
    $unknown?: never;
  }

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  export interface ObjectSizeLessThanOrEqualToMember {
    And?: never;
    Or?: never;
    Tag?: never;
    Prefix?: never;
    PrefixNotMatch?: never;
    Suffix?: never;
    SuffixNotMatch?: never;
    ObjectSizeLessThan?: never;
    ObjectSizeLessThanOrEqualTo: number;
    ObjectSizeEqualTo?: never;
    ObjectSizeBetween?: never;
    ObjectSizeGreaterThanOrEqualTo?: never;
    ObjectSizeGreaterThan?: never;
    $unknown?: never;
  }

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  export interface ObjectSizeEqualToMember {
    And?: never;
    Or?: never;
    Tag?: never;
    Prefix?: never;
    PrefixNotMatch?: never;
    Suffix?: never;
    SuffixNotMatch?: never;
    ObjectSizeLessThan?: never;
    ObjectSizeLessThanOrEqualTo?: never;
    ObjectSizeEqualTo: number;
    ObjectSizeBetween?: never;
    ObjectSizeGreaterThanOrEqualTo?: never;
    ObjectSizeGreaterThan?: never;
    $unknown?: never;
  }

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  export interface ObjectSizeBetweenMember {
    And?: never;
    Or?: never;
    Tag?: never;
    Prefix?: never;
    PrefixNotMatch?: never;
    Suffix?: never;
    SuffixNotMatch?: never;
    ObjectSizeLessThan?: never;
    ObjectSizeLessThanOrEqualTo?: never;
    ObjectSizeEqualTo?: never;
    ObjectSizeBetween: ObjectSizeRange;
    ObjectSizeGreaterThanOrEqualTo?: never;
    ObjectSizeGreaterThan?: never;
    $unknown?: never;
  }

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  export interface ObjectSizeGreaterThanOrEqualToMember {
    And?: never;
    Or?: never;
    Tag?: never;
    Prefix?: never;
    PrefixNotMatch?: never;
    Suffix?: never;
    SuffixNotMatch?: never;
    ObjectSizeLessThan?: never;
    ObjectSizeLessThanOrEqualTo?: never;
    ObjectSizeEqualTo?: never;
    ObjectSizeBetween?: never;
    ObjectSizeGreaterThanOrEqualTo: number;
    ObjectSizeGreaterThan?: never;
    $unknown?: never;
  }

  /**
   * <p>Prefix identifying one or more objects to which the rule applies.</p>
   */
  export interface ObjectSizeGreaterThanMember {
    And?: never;
    Or?: never;
    Tag?: never;
    Prefix?: never;
    PrefixNotMatch?: never;
    Suffix?: never;
    SuffixNotMatch?: never;
    ObjectSizeLessThan?: never;
    ObjectSizeLessThanOrEqualTo?: never;
    ObjectSizeEqualTo?: never;
    ObjectSizeBetween?: never;
    ObjectSizeGreaterThanOrEqualTo?: never;
    ObjectSizeGreaterThan: number;
    $unknown?: never;
  }

  export interface $UnknownMember {
    And?: never;
    Or?: never;
    Tag?: never;
    Prefix?: never;
    PrefixNotMatch?: never;
    Suffix?: never;
    SuffixNotMatch?: never;
    ObjectSizeLessThan?: never;
    ObjectSizeLessThanOrEqualTo?: never;
    ObjectSizeEqualTo?: never;
    ObjectSizeBetween?: never;
    ObjectSizeGreaterThanOrEqualTo?: never;
    ObjectSizeGreaterThan?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    And: (value: LifecycleAndRuleOperator) => T;
    Or: (value: LifecycleOrRuleOperator) => T;
    Tag: (value: Tag) => T;
    Prefix: (value: string) => T;
    PrefixNotMatch: (value: string) => T;
    Suffix: (value: string) => T;
    SuffixNotMatch: (value: string) => T;
    ObjectSizeLessThan: (value: number) => T;
    ObjectSizeLessThanOrEqualTo: (value: number) => T;
    ObjectSizeEqualTo: (value: number) => T;
    ObjectSizeBetween: (value: ObjectSizeRange) => T;
    ObjectSizeGreaterThanOrEqualTo: (value: number) => T;
    ObjectSizeGreaterThan: (value: number) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: LifecycleRuleFilter, visitor: Visitor<T>): T => {
    if (value.And !== undefined) return visitor.And(value.And);
    if (value.Or !== undefined) return visitor.Or(value.Or);
    if (value.Tag !== undefined) return visitor.Tag(value.Tag);
    if (value.Prefix !== undefined) return visitor.Prefix(value.Prefix);
    if (value.PrefixNotMatch !== undefined) return visitor.PrefixNotMatch(value.PrefixNotMatch);
    if (value.Suffix !== undefined) return visitor.Suffix(value.Suffix);
    if (value.SuffixNotMatch !== undefined) return visitor.SuffixNotMatch(value.SuffixNotMatch);
    if (value.ObjectSizeLessThan !== undefined) return visitor.ObjectSizeLessThan(value.ObjectSizeLessThan);
    if (value.ObjectSizeLessThanOrEqualTo !== undefined)
      return visitor.ObjectSizeLessThanOrEqualTo(value.ObjectSizeLessThanOrEqualTo);
    if (value.ObjectSizeEqualTo !== undefined) return visitor.ObjectSizeEqualTo(value.ObjectSizeEqualTo);
    if (value.ObjectSizeBetween !== undefined) return visitor.ObjectSizeBetween(value.ObjectSizeBetween);
    if (value.ObjectSizeGreaterThanOrEqualTo !== undefined)
      return visitor.ObjectSizeGreaterThanOrEqualTo(value.ObjectSizeGreaterThanOrEqualTo);
    if (value.ObjectSizeGreaterThan !== undefined) return visitor.ObjectSizeGreaterThan(value.ObjectSizeGreaterThan);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  export const filterSensitiveLog = (obj: LifecycleRuleFilter): any => {
    if (obj.And !== undefined) return { And: LifecycleAndRuleOperator.filterSensitiveLog(obj.And) };
    if (obj.Or !== undefined) return { Or: LifecycleOrRuleOperator.filterSensitiveLog(obj.Or) };
    if (obj.Tag !== undefined) return { Tag: Tag.filterSensitiveLog(obj.Tag) };
    if (obj.Prefix !== undefined) return { Prefix: obj.Prefix };
    if (obj.PrefixNotMatch !== undefined) return { PrefixNotMatch: obj.PrefixNotMatch };
    if (obj.Suffix !== undefined) return { Suffix: obj.Suffix };
    if (obj.SuffixNotMatch !== undefined) return { SuffixNotMatch: obj.SuffixNotMatch };
    if (obj.ObjectSizeLessThan !== undefined) return { ObjectSizeLessThan: obj.ObjectSizeLessThan };
    if (obj.ObjectSizeLessThanOrEqualTo !== undefined)
      return { ObjectSizeLessThanOrEqualTo: obj.ObjectSizeLessThanOrEqualTo };
    if (obj.ObjectSizeEqualTo !== undefined) return { ObjectSizeEqualTo: obj.ObjectSizeEqualTo };
    if (obj.ObjectSizeBetween !== undefined)
      return { ObjectSizeBetween: ObjectSizeRange.filterSensitiveLog(obj.ObjectSizeBetween) };
    if (obj.ObjectSizeGreaterThanOrEqualTo !== undefined)
      return { ObjectSizeGreaterThanOrEqualTo: obj.ObjectSizeGreaterThanOrEqualTo };
    if (obj.ObjectSizeGreaterThan !== undefined) return { ObjectSizeGreaterThan: obj.ObjectSizeGreaterThan };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * <p>Specifies when noncurrent object versions expire. Upon expiration, Amazon S3 permanently
 *          deletes the noncurrent object versions. You set this lifecycle configuration action on a
 *          bucket that has versioning enabled (or suspended) to request that Amazon S3 delete noncurrent
 *          object versions at a specific period in the object's lifetime.</p>
 */
export interface NoncurrentVersionExpiration {
  /**
   * <p>Specifies the number of days an object is noncurrent before Amazon S3 can perform the
   *          associated action. For information about the noncurrent days calculations, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#non-current-days-calculations">How
   *             Amazon S3 Calculates When an Object Became Noncurrent</a> in the <i>Amazon Simple
   *             Storage Service Developer Guide</i>.</p>
   */
  NoncurrentDays?: number;

  /**
   * <p>Hours</p>
   */
  NoncurrentHours?: number;

  /**
   * <p>Minutes</p>
   */
  NoncurrentMinutes?: number;
}

export namespace NoncurrentVersionExpiration {
  export const filterSensitiveLog = (obj: NoncurrentVersionExpiration): any => ({
    ...obj,
  });
}

export type TransitionStorageClass = "DEEP_ARCHIVE" | "GLACIER" | "INTELLIGENT_TIERING" | "ONEZONE_IA" | "STANDARD_IA";

/**
 * <p>Container for the transition rule that describes when noncurrent objects transition to
 *          the <code>STANDARD_IA</code>, <code>ONEZONE_IA</code>, <code>INTELLIGENT_TIERING</code>,
 *             <code>GLACIER</code>, or <code>DEEP_ARCHIVE</code> storage class. If your bucket is
 *          versioning-enabled (or versioning is suspended), you can set this action to request that
 *          Amazon S3 transition noncurrent object versions to the <code>STANDARD_IA</code>,
 *             <code>ONEZONE_IA</code>, <code>INTELLIGENT_TIERING</code>, <code>GLACIER</code>, or
 *             <code>DEEP_ARCHIVE</code> storage class at a specific period in the object's
 *          lifetime.</p>
 */
export interface NoncurrentVersionTransition {
  /**
   * <p>Specifies the number of days an object is noncurrent before Amazon S3 can perform the
   *          associated action. For information about the noncurrent days calculations, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#non-current-days-calculations">How
   *             Amazon S3 Calculates How Long an Object Has Been Noncurrent</a> in the
   *             <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  NoncurrentDays?: number;

  /**
   * <p>Hours</p>
   */
  NoncurrentHours?: number;

  /**
   * <p>Minutes</p>
   */
  NoncurrentMinutes?: number;

  /**
   * <p>The class of storage used to store the object.</p>
   */
  StorageClass?: TransitionStorageClass | string;

  /**
   * <p>生命周期 glacier config</p>
   */
  GlacierConfiguration?: string;
}

export namespace NoncurrentVersionTransition {
  export const filterSensitiveLog = (obj: NoncurrentVersionTransition): any => ({
    ...obj,
  });
}

export interface RestoreExpiration {
  /**
   * <p>生命周期规则桶内恢复对象</p>
   */
  DeleteRestoreObject?: boolean;
}

export namespace RestoreExpiration {
  export const filterSensitiveLog = (obj: RestoreExpiration): any => ({
    ...obj,
  });
}

export interface LifecyclePeriod {
  /**
   * <p>Specifies the expiration for the lifecycle of the object in the form of date, days and,
   *          whether the object has a delete marker.</p>
   */
  Start?: string;

  /**
   * <p>Specifies the expiration for the lifecycle of the object in the form of date, days and,
   *          whether the object has a delete marker.</p>
   */
  End?: string;
}

export namespace LifecyclePeriod {
  export const filterSensitiveLog = (obj: LifecyclePeriod): any => ({
    ...obj,
  });
}

/**
 * <p>Running times.</p>
 */
export interface LifecycleRunningTimes {
  /**
   * <p>A lifecycle period list.</p>
   */
  Period?: LifecyclePeriod[];
}

export namespace LifecycleRunningTimes {
  export const filterSensitiveLog = (obj: LifecycleRunningTimes): any => ({
    ...obj,
  });
}

export type ExpirationStatus = "Disabled" | "Enabled";

/**
 * <p>Specifies when an object transitions to a specified storage class. For more information
 *          about Amazon S3 lifecycle configuration rules, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/lifecycle-transition-general-considerations.html">Transitioning
 *             Objects Using Amazon S3 Lifecycle</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
 */
export interface Transition {
  /**
   * <p>Indicates when objects are transitioned to the specified storage class. The date value
   *          must be in ISO 8601 format. The time is always midnight UTC.</p>
   */
  Date?: Date;

  /**
   * <p>Indicates the number of days after creation when objects are transitioned to the
   *          specified storage class. The value must be a positive integer.</p>
   */
  Days?: number;

  /**
   * <p>Minutes</p>
   */
  Minutes?: number;

  /**
   * <p>Hours</p>
   */
  Hours?: number;

  /**
   * <p>The storage class to which you want the object to transition.</p>
   */
  StorageClass?: TransitionStorageClass | string;

  /**
   * <p>生命周期 glacier config</p>
   */
  GlacierConfiguration?: string;
}

export namespace Transition {
  export const filterSensitiveLog = (obj: Transition): any => ({
    ...obj,
  });
}

/**
 * <p>A lifecycle rule for individual objects in an Amazon S3 bucket.</p>
 */
export interface LifecycleRule {
  /**
   * <p>Specifies the expiration for the lifecycle of the object in the form of date, days and,
   *          whether the object has a delete marker.</p>
   */
  Expiration?: LifecycleExpiration;

  /**
   * <p>生命周期规则桶内恢复对象</p>
   */
  RestoreExpiration?: RestoreExpiration;

  /**
   * <p>Specifies the expiration for the lifecycle of the object in the form of date, days and,
   *          whether the object has a delete marker.</p>
   */
  BucketExpiration?: LifecycleExpiration;

  /**
   * <p>Unique identifier for the rule. The value cannot be longer than 255 characters.</p>
   */
  ID?: string;

  /**
   * @deprecated
   *
   * <p>Prefix identifying one or more objects to which the rule applies. This is
   *          No longer used; use <code>Filter</code> instead.</p>
   */
  Prefix?: string;

  /**
   * <p>The <code>Filter</code> is used to identify objects that a Lifecycle Rule applies to. A
   *             <code>Filter</code> must have exactly one of <code>Prefix</code>, <code>Tag</code>, or
   *             <code>And</code> specified.</p>
   */
  Filter?: LifecycleRuleFilter;

  /**
   * <p>If 'Enabled', the rule is currently being applied. If 'Disabled', the rule is not
   *          currently being applied.</p>
   */
  Status: ExpirationStatus | string | undefined;

  /**
   * <p>Specifies when an Amazon S3 object transitions to a specified storage class.</p>
   */
  Transitions?: Transition[];

  /**
   * <p> Specifies the transition rule for the lifecycle rule that describes when noncurrent
   *          objects transition to a specific storage class. If your bucket is versioning-enabled (or
   *          versioning is suspended), you can set this action to request that Amazon S3 transition
   *          noncurrent object versions to a specific storage class at a set period in the object's
   *          lifetime. </p>
   */
  NoncurrentVersionTransitions?: NoncurrentVersionTransition[];

  /**
   * <p>Specifies when noncurrent object versions expire. Upon expiration, Amazon S3 permanently
   *          deletes the noncurrent object versions. You set this lifecycle configuration action on a
   *          bucket that has versioning enabled (or suspended) to request that Amazon S3 delete noncurrent
   *          object versions at a specific period in the object's lifetime.</p>
   */
  NoncurrentVersionExpiration?: NoncurrentVersionExpiration;

  /**
   * <p>Specifies the days since the initiation of an incomplete multipart upload that Amazon S3 will
   *          wait before permanently removing all parts of the upload. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config">
   *             Aborting Incomplete Multipart Uploads Using a Bucket Lifecycle Policy</a> in the
   *             <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  AbortIncompleteMultipartUpload?: AbortIncompleteMultipartUpload;

  /**
   * <p>A lifecycle rule for individual objects in an Amazon S3 bucket.</p>
   */
  RunningTimes?: LifecycleRunningTimes;

  DeletedObjectToTrash?: boolean;
}

export namespace LifecycleRule {
  export const filterSensitiveLog = (obj: LifecycleRule): any => ({
    ...obj,
    ...(obj.Filter && { Filter: LifecycleRuleFilter.filterSensitiveLog(obj.Filter) }),
  });
}

export interface GetBucketLifecycleConfigurationOutput {
  /**
   * <p>Container for a lifecycle rule.</p>
   */
  Rules?: LifecycleRule[];
}

export namespace GetBucketLifecycleConfigurationOutput {
  export const filterSensitiveLog = (obj: GetBucketLifecycleConfigurationOutput): any => ({
    ...obj,
    ...(obj.Rules && { Rules: obj.Rules.map((item) => LifecycleRule.filterSensitiveLog(item)) }),
  });
}

export interface GetBucketLifecycleConfigurationRequest {
  /**
   * <p>The name of the bucket for which to get the lifecycle information.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetBucketLifecycleConfigurationRequest {
  export const filterSensitiveLog = (obj: GetBucketLifecycleConfigurationRequest): any => ({
    ...obj,
  });
}

export interface GetBucketLocationOutput {
  /**
   * <p>Specifies the Region where the bucket resides. For a list of all the Amazon S3 supported
   *          location constraints by Region, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region">Regions and Endpoints</a>.
   *          Buckets in Region <code>us-east-1</code> have a LocationConstraint of
   *          <code>null</code>.</p>
   */
  LocationConstraint?: BucketLocationConstraint | string;
}

export namespace GetBucketLocationOutput {
  export const filterSensitiveLog = (obj: GetBucketLocationOutput): any => ({
    ...obj,
  });
}

export interface GetBucketLocationRequest {
  /**
   * <p>The name of the bucket for which to get the location.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetBucketLocationRequest {
  export const filterSensitiveLog = (obj: GetBucketLocationRequest): any => ({
    ...obj,
  });
}

export type BucketLogsPermission = "FULL_CONTROL" | "READ" | "WRITE";

/**
 * <p>Container for granting information.</p>
 */
export interface TargetGrant {
  /**
   * <p>Container for the person being granted permissions.</p>
   */
  Grantee?: Grantee;

  /**
   * <p>Logging permissions assigned to the grantee for the bucket.</p>
   */
  Permission?: BucketLogsPermission | string;
}

export namespace TargetGrant {
  export const filterSensitiveLog = (obj: TargetGrant): any => ({
    ...obj,
  });
}

/**
 * <p>Describes where logs are stored and the prefix that Amazon S3 assigns to all log object keys
 *          for a bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTlogging.html">PUT Bucket logging</a> in the
 *             <i>Amazon Simple Storage Service API Reference</i>.</p>
 */
export interface LoggingEnabled {
  /**
   * <p>Specifies the bucket where you want Amazon S3 to store server access logs. You can have your
   *          logs delivered to any bucket that you own, including the same bucket that is being logged.
   *          You can also configure multiple buckets to deliver their logs to the same target bucket. In
   *          this case, you should choose a different <code>TargetPrefix</code> for each source bucket
   *          so that the delivered log files can be distinguished by key.</p>
   */
  TargetBucket: string | undefined;

  /**
   * <p>Container for granting information.</p>
   */
  TargetGrants?: TargetGrant[];

  /**
   * <p>A prefix for all log object keys. If you store log files from multiple Amazon S3 buckets in a
   *          single bucket, you can use a prefix to distinguish which log files came from which
   *          bucket.</p>
   */
  TargetPrefix: string | undefined;
}

export namespace LoggingEnabled {
  export const filterSensitiveLog = (obj: LoggingEnabled): any => ({
    ...obj,
  });
}

export interface GetBucketLoggingOutput {
  /**
   * <p>Describes where logs are stored and the prefix that Amazon S3 assigns to all log object keys
   *          for a bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTlogging.html">PUT Bucket logging</a> in the
   *             <i>Amazon Simple Storage Service API Reference</i>.</p>
   */
  LoggingEnabled?: LoggingEnabled;
}

export namespace GetBucketLoggingOutput {
  export const filterSensitiveLog = (obj: GetBucketLoggingOutput): any => ({
    ...obj,
  });
}

export interface GetBucketLoggingRequest {
  /**
   * <p>The bucket name for which to get the logging information.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetBucketLoggingRequest {
  export const filterSensitiveLog = (obj: GetBucketLoggingRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A conjunction (logical AND) of predicates, which is used in evaluating a metrics filter.
 *          The operator must have at least two predicates, and an object must match all of the
 *          predicates in order for the filter to apply.</p>
 */
export interface MetricsAndOperator {
  /**
   * <p>The prefix used when evaluating an AND predicate.</p>
   */
  Prefix?: string;

  /**
   * <p>The list of tags used when evaluating an AND predicate.</p>
   */
  Tags?: Tag[];
}

export namespace MetricsAndOperator {
  export const filterSensitiveLog = (obj: MetricsAndOperator): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a metrics configuration filter. The metrics configuration only includes
 *          objects that meet the filter's criteria. A filter must be a prefix, a tag, or a conjunction
 *          (MetricsAndOperator).</p>
 */
export type MetricsFilter =
  | MetricsFilter.AndMember
  | MetricsFilter.PrefixMember
  | MetricsFilter.TagMember
  | MetricsFilter.$UnknownMember;

export namespace MetricsFilter {
  /**
   * <p>The prefix used when evaluating a metrics filter.</p>
   */
  export interface PrefixMember {
    Prefix: string;
    Tag?: never;
    And?: never;
    $unknown?: never;
  }

  /**
   * <p>The tag used when evaluating a metrics filter.</p>
   */
  export interface TagMember {
    Prefix?: never;
    Tag: Tag;
    And?: never;
    $unknown?: never;
  }

  /**
   * <p>A conjunction (logical AND) of predicates, which is used in evaluating a metrics filter.
   *          The operator must have at least two predicates, and an object must match all of the
   *          predicates in order for the filter to apply.</p>
   */
  export interface AndMember {
    Prefix?: never;
    Tag?: never;
    And: MetricsAndOperator;
    $unknown?: never;
  }

  export interface $UnknownMember {
    Prefix?: never;
    Tag?: never;
    And?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Prefix: (value: string) => T;
    Tag: (value: Tag) => T;
    And: (value: MetricsAndOperator) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: MetricsFilter, visitor: Visitor<T>): T => {
    if (value.Prefix !== undefined) return visitor.Prefix(value.Prefix);
    if (value.Tag !== undefined) return visitor.Tag(value.Tag);
    if (value.And !== undefined) return visitor.And(value.And);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  export const filterSensitiveLog = (obj: MetricsFilter): any => {
    if (obj.Prefix !== undefined) return { Prefix: obj.Prefix };
    if (obj.Tag !== undefined) return { Tag: Tag.filterSensitiveLog(obj.Tag) };
    if (obj.And !== undefined) return { And: MetricsAndOperator.filterSensitiveLog(obj.And) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * <p>Specifies a metrics configuration for the CloudWatch request metrics (specified by the
 *          metrics configuration ID) from an Amazon S3 bucket. If you're updating an existing metrics
 *          configuration, note that this is a full replacement of the existing metrics configuration.
 *          If you don't include the elements you want to keep, they are erased. For more information,
 *          see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTMetricConfiguration.html"> PUT Bucket
 *             metrics</a> in the <i>Amazon Simple Storage Service API Reference</i>.</p>
 */
export interface MetricsConfiguration {
  /**
   * <p>The ID used to identify the metrics configuration.</p>
   */
  Id: string | undefined;

  /**
   * <p>Specifies a metrics configuration filter. The metrics configuration will only include
   *          objects that meet the filter's criteria. A filter must be a prefix, a tag, or a conjunction
   *          (MetricsAndOperator).</p>
   */
  Filter?: MetricsFilter;
}

export namespace MetricsConfiguration {
  export const filterSensitiveLog = (obj: MetricsConfiguration): any => ({
    ...obj,
    ...(obj.Filter && { Filter: MetricsFilter.filterSensitiveLog(obj.Filter) }),
  });
}

export interface GetBucketMetricsConfigurationOutput {
  /**
   * <p>Specifies the metrics configuration.</p>
   */
  MetricsConfiguration?: MetricsConfiguration;
}

export namespace GetBucketMetricsConfigurationOutput {
  export const filterSensitiveLog = (obj: GetBucketMetricsConfigurationOutput): any => ({
    ...obj,
    ...(obj.MetricsConfiguration && {
      MetricsConfiguration: MetricsConfiguration.filterSensitiveLog(obj.MetricsConfiguration),
    }),
  });
}

export interface GetBucketMetricsConfigurationRequest {
  /**
   * <p>The name of the bucket containing the metrics configuration to retrieve.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The ID used to identify the metrics configuration.</p>
   */
  Id: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetBucketMetricsConfigurationRequest {
  export const filterSensitiveLog = (obj: GetBucketMetricsConfigurationRequest): any => ({
    ...obj,
  });
}

export interface GetBucketNotificationConfigurationRequest {
  /**
   * <p>The name of the bucket for which to get the notification configuration.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetBucketNotificationConfigurationRequest {
  export const filterSensitiveLog = (obj: GetBucketNotificationConfigurationRequest): any => ({
    ...obj,
  });
}

export type Event =
  | "s3:ObjectCreated:*"
  | "s3:ObjectCreated:CompleteMultipartUpload"
  | "s3:ObjectCreated:Copy"
  | "s3:ObjectCreated:Post"
  | "s3:ObjectCreated:Put"
  | "s3:ObjectRemoved:*"
  | "s3:ObjectRemoved:Delete"
  | "s3:ObjectRemoved:DeleteMarkerCreated"
  | "s3:ObjectRestore:*"
  | "s3:ObjectRestore:Completed"
  | "s3:ObjectRestore:Post"
  | "s3:ReducedRedundancyLostObject"
  | "s3:Replication:*"
  | "s3:Replication:OperationFailedReplication"
  | "s3:Replication:OperationMissedThreshold"
  | "s3:Replication:OperationNotTracked"
  | "s3:Replication:OperationReplicatedAfterThreshold";

export type FilterRuleName = "prefix" | "suffix";

/**
 * <p>Specifies the Amazon S3 object key name to filter on and whether to filter on the suffix or
 *          prefix of the key name.</p>
 */
export interface FilterRule {
  /**
   * <p>The object key name prefix or suffix identifying one or more objects to which the
   *          filtering rule applies. The maximum length is 1,024 characters. Overlapping prefixes and
   *          suffixes are not supported. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Configuring Event Notifications</a>
   *          in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Name?: FilterRuleName | string;

  /**
   * <p>The value that the filter searches for in object key names.</p>
   */
  Value?: string;
}

export namespace FilterRule {
  export const filterSensitiveLog = (obj: FilterRule): any => ({
    ...obj,
  });
}

/**
 * <p>A container for object key name prefix and suffix filtering rules.</p>
 */
export interface S3KeyFilter {
  /**
   * <p>A list of containers for the key-value pair that defines the criteria for the filter
   *          rule.</p>
   */
  FilterRules?: FilterRule[];
}

export namespace S3KeyFilter {
  export const filterSensitiveLog = (obj: S3KeyFilter): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies object key name filtering rules. For information about key name filtering, see
 *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Configuring
 *             Event Notifications</a> in the <i>Amazon Simple Storage Service Developer
 *          Guide</i>.</p>
 */
export interface NotificationConfigurationFilter {
  /**
   * <p>A container for object key name prefix and suffix filtering rules.</p>
   */
  Key?: S3KeyFilter;
}

export namespace NotificationConfigurationFilter {
  export const filterSensitiveLog = (obj: NotificationConfigurationFilter): any => ({
    ...obj,
  });
}

/**
 * <p>A container for specifying the configuration for AWS Lambda notifications.</p>
 */
export interface LambdaFunctionConfiguration {
  /**
   * <p>An optional unique identifier for configurations in a notification configuration. If you
   *          don't provide one, Amazon S3 will assign an ID.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Lambda function that Amazon S3 invokes when the
   *          specified event type occurs.</p>
   */
  LambdaFunctionArn: string | undefined;

  /**
   * <p>The Amazon S3 bucket event for which to invoke the AWS Lambda function. For more information,
   *          see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Supported
   *             Event Types</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Events: (Event | string)[] | undefined;

  /**
   * <p>Specifies object key name filtering rules. For information about key name filtering, see
   *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Configuring
   *             Event Notifications</a> in the <i>Amazon Simple Storage Service Developer
   *          Guide</i>.</p>
   */
  Filter?: NotificationConfigurationFilter;
}

export namespace LambdaFunctionConfiguration {
  export const filterSensitiveLog = (obj: LambdaFunctionConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the configuration for publishing messages to an Amazon Simple Queue Service
 *          (Amazon SQS) queue when Amazon S3 detects specified events.</p>
 */
export interface QueueConfiguration {
  /**
   * <p>An optional unique identifier for configurations in a notification configuration. If you
   *          don't provide one, Amazon S3 will assign an ID.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SQS queue to which Amazon S3 publishes a message
   *          when it detects events of the specified type.</p>
   */
  QueueArn: string | undefined;

  /**
   * <p>A collection of bucket events for which to send notifications</p>
   */
  Events: (Event | string)[] | undefined;

  /**
   * <p>Specifies object key name filtering rules. For information about key name filtering, see
   *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Configuring
   *             Event Notifications</a> in the <i>Amazon Simple Storage Service Developer
   *          Guide</i>.</p>
   */
  Filter?: NotificationConfigurationFilter;
}

export namespace QueueConfiguration {
  export const filterSensitiveLog = (obj: QueueConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>A container for specifying the configuration for publication of messages to an Amazon
 *          Simple Notification Service (Amazon SNS) topic when Amazon S3 detects specified events.</p>
 */
export interface TopicConfiguration {
  /**
   * <p>An optional unique identifier for configurations in a notification configuration. If you
   *          don't provide one, Amazon S3 will assign an ID.</p>
   */
  Id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic to which Amazon S3 publishes a message
   *          when it detects events of the specified type.</p>
   */
  TopicArn: string | undefined;

  /**
   * <p>The Amazon S3 bucket event about which to send notifications. For more information, see
   *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Supported
   *             Event Types</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Events: (Event | string)[] | undefined;

  /**
   * <p>Specifies object key name filtering rules. For information about key name filtering, see
   *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html">Configuring
   *             Event Notifications</a> in the <i>Amazon Simple Storage Service Developer
   *          Guide</i>.</p>
   */
  Filter?: NotificationConfigurationFilter;
}

export namespace TopicConfiguration {
  export const filterSensitiveLog = (obj: TopicConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>A container for specifying the notification configuration of the bucket. If this element
 *          is empty, notifications are turned off for the bucket.</p>
 */
export interface NotificationConfiguration {
  /**
   * <p>The topic to which notifications are sent and the events for which notifications are
   *          generated.</p>
   */
  TopicConfigurations?: TopicConfiguration[];

  /**
   * <p>The Amazon Simple Queue Service queues to publish messages to and the events for which
   *          to publish messages.</p>
   */
  QueueConfigurations?: QueueConfiguration[];

  /**
   * <p>Describes the AWS Lambda functions to invoke and the events for which to invoke
   *          them.</p>
   */
  LambdaFunctionConfigurations?: LambdaFunctionConfiguration[];
}

export namespace NotificationConfiguration {
  export const filterSensitiveLog = (obj: NotificationConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>桶bts配置</p>
 */
export interface BtsConfiguration {
  Status?: Status | string;
}

export namespace BtsConfiguration {
  export const filterSensitiveLog = (obj: BtsConfiguration): any => ({
    ...obj,
  });
}

export interface BucketRedundancyConfiguration {
  Status?: string;
}

export namespace BucketRedundancyConfiguration {
  export const filterSensitiveLog = (obj: BucketRedundancyConfiguration): any => ({
    ...obj,
  });
}

export interface CompressionConfigurations {
  /**
   * <p>Status</p>
   */
  Status?: string;
}

export namespace CompressionConfigurations {
  export const filterSensitiveLog = (obj: CompressionConfigurations): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the cross-origin access configuration for objects in an Amazon S3 bucket. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html">Enabling
 *             Cross-Origin Resource Sharing</a> in the <i>Amazon Simple Storage Service Developer
 *             Guide</i>.</p>
 */
export interface CORSConfiguration {
  /**
   * <p>A set of origins and methods (cross-origin access that you want to allow). You can add
   *          up to 100 rules to the configuration.</p>
   */
  CORSRules: CORSRule[] | undefined;

  Status?: Status | string;
}

export namespace CORSConfiguration {
  export const filterSensitiveLog = (obj: CORSConfiguration): any => ({
    ...obj,
  });
}

export type Region = "ACCOUNT" | "BUCKET" | "POOL" | "POOL_REDUNDANCY" | "SYSTEM";

export interface BucketDedupConfiguration {
  /**
   * 是否开启重删，Enabled：开启  Disabled：关闭
   */
  Status?: Status | string;

  /**
   * 开启重删后上传的对象数量
   */
  Num?: number;

  /**
   * 开启重删后上传的对象容量
   */
  Size?: number;

  /**
   * 重删对象数量
   */
  DedupNum?: number;

  /**
   * 重删对象容量
   */
  DedupSize?: number;

  /**
   * 重删域
   */
  Region?: Region | string;

  /**
   * 逐字节比较
   */
  CompareByte?: boolean;
}

export namespace BucketDedupConfiguration {
  export const filterSensitiveLog = (obj: BucketDedupConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the lifecycle configuration for objects in an Amazon S3 bucket. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html">Object Lifecycle Management</a>
 *          in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
 */
export interface BucketLifecycleConfiguration {
  /**
   * <p>A lifecycle rule for individual objects in an Amazon S3 bucket.</p>
   */
  Rules: LifecycleRule[] | undefined;

  Status?: Status | string;
}

export namespace BucketLifecycleConfiguration {
  export const filterSensitiveLog = (obj: BucketLifecycleConfiguration): any => ({
    ...obj,
    ...(obj.Rules && { Rules: obj.Rules.map((item) => LifecycleRule.filterSensitiveLog(item)) }),
  });
}

/**
 * <p>Container for logging status information.</p>
 */
export interface BucketLoggingConfiguration {
  Status?: Status | string;
}

export namespace BucketLoggingConfiguration {
  export const filterSensitiveLog = (obj: BucketLoggingConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the lifecycle configuration for objects in an Amazon S3 bucket. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html">Object Lifecycle Management</a>
 *          in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
 */
export interface MetaSearchConfiguration {
  Status?: Status | string;
}

export namespace MetaSearchConfiguration {
  export const filterSensitiveLog = (obj: MetaSearchConfiguration): any => ({
    ...obj,
  });
}

export type ObjectLockEnabled = "Enabled";

export type ObjectLockRetentionMode = "COMPLIANCE" | "GOVERNANCE";

/**
 * <p>The container element for specifying the default Object Lock retention settings for new
 *          objects placed in the specified bucket.</p>
 */
export interface DefaultRetention {
  /**
   * <p>The default Object Lock retention mode you want to apply to new objects placed in the
   *          specified bucket.</p>
   */
  Mode?: ObjectLockRetentionMode | string;

  /**
   * <p>The number of days that you want to specify for the default retention period.</p>
   */
  Days?: number;

  /**
   * <p>The number of years that you want to specify for the default retention period.</p>
   */
  Years?: number;

  /**
   * <p>The number of months that you want to specify for the default retention period.</p>
   */
  Months?: number;
}

export namespace DefaultRetention {
  export const filterSensitiveLog = (obj: DefaultRetention): any => ({
    ...obj,
  });
}

/**
 * <p>The container element for an Object Lock rule.</p>
 */
export interface ObjectLockRule {
  /**
   * <p>The default retention period that you want to apply to new objects placed in the
   *          specified bucket.</p>
   */
  DefaultRetention?: DefaultRetention;
}

export namespace ObjectLockRule {
  export const filterSensitiveLog = (obj: ObjectLockRule): any => ({
    ...obj,
  });
}

/**
 * <p>The container element for Object Lock configuration parameters.</p>
 */
export interface ObjectLockConfiguration {
  /**
   * <p>Indicates whether this bucket has an Object Lock configuration enabled.</p>
   */
  ObjectLockEnabled?: ObjectLockEnabled | string;

  /**
   * <p>The Object Lock rule in place for the specified object.</p>
   */
  Rule?: ObjectLockRule;

  /**
   * <p>The Object Lock status.</p>
   */
  Status?: Status | string;
}

export namespace ObjectLockConfiguration {
  export const filterSensitiveLog = (obj: ObjectLockConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the lifecycle configuration for objects in an Amazon S3 bucket. For more
 *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html">Object Lifecycle Management</a>
 *          in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
 */
export interface BucketOSCPConfiguration {
  Status?: Status | string;
}

export namespace BucketOSCPConfiguration {
  export const filterSensitiveLog = (obj: BucketOSCPConfiguration): any => ({
    ...obj,
  });
}

export interface PolicyConfiguration {
  Status?: Status | string;
  PolicyMode?: PolicyMode | string;
}

export namespace PolicyConfiguration {
  export const filterSensitiveLog = (obj: PolicyConfiguration): any => ({
    ...obj,
  });
}

export interface QoSConfiguration {
  ReadOps?: number;
  WriteOps?: number;
  ReadBandwidth?: number;
  WriteBandwidth?: number;
  TotalOps?: number;
  DeleteOps?: number;
  ListOps?: number;
  Status?: Status | string;
}

export namespace QoSConfiguration {
  export const filterSensitiveLog = (obj: QoSConfiguration): any => ({
    ...obj,
  });
}

export interface Quota {
  StorageQuota?: string;
  ObjectQuota?: string;
  /**
   * <p>超配额删除旧对象</p>
   */
  OverQuotaDelete?: string;
}

export namespace Quota {
  export const filterSensitiveLog = (obj: Quota): any => ({
    ...obj,
  });
}

export interface RefererList {
  /**
   * <p>Specifies the Region where the bucket will be created. If you don't specify a Region,
   *          the bucket is created in the US East (N. Virginia) Region (us-east-1).</p>
   */
  BlackList?: string[];

  /**
   * <p>Specifies the Region where the bucket will be created. If you don't specify a Region,
   *          the bucket is created in the US East (N. Virginia) Region (us-east-1).</p>
   */
  WhiteList?: string[];
}

export namespace RefererList {
  export const filterSensitiveLog = (obj: RefererList): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration information for the bucket.</p>
 */
export interface RefererConfiguration {
  /**
   * <p>Specifies the Region where the bucket will be created. If you don't specify a Region,
   *          the bucket is created in the US East (N. Virginia) Region (us-east-1).</p>
   */
  AllowEmptyReferer?: boolean;

  /**
   * <p>Specifies the Region where the bucket will be created. If you don't specify a Region,
   *          the bucket is created in the US East (N. Virginia) Region (us-east-1).</p>
   */
  RefererList?: RefererList;

  Status?: Status | string;
}

export namespace RefererConfiguration {
  export const filterSensitiveLog = (obj: RefererConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Container for rep pair status information.</p>
 */
export interface RepPairConfiguration {
  Status?: Status | string;
}

export namespace RepPairConfiguration {
  export const filterSensitiveLog = (obj: RepPairConfiguration): any => ({
    ...obj,
  });
}

export type BucketTrashStatus = "Closing" | "Disabled" | "Enabled";

/**
 * <p>Container for rep pair status information.</p>
 */
export interface TrashConfiguration {
  Status?: BucketTrashStatus | string;
}

export namespace TrashConfiguration {
  export const filterSensitiveLog = (obj: TrashConfiguration): any => ({
    ...obj,
  });
}

export interface DomainNames {
  /**
   * <p>域名</p>
   */
  DomainName: string | undefined;
}

export namespace DomainNames {
  export const filterSensitiveLog = (obj: DomainNames): any => ({
    ...obj,
  });
}

export interface TransferOrRestoreBucketName {
  /**
   * <p>标准桶信息</p>
   */
  StandardBucketName?: string;

  /**
   * <p>低频桶信息</p>
   */
  StandardIABucketName?: string;

  /**
   * <p>归档桶信息</p>
   */
  GlacierBucketName?: string;
}

export namespace TransferOrRestoreBucketName {
  export const filterSensitiveLog = (obj: TransferOrRestoreBucketName): any => ({
    ...obj,
  });
}

export interface StatisticConfiguration {
  /**
   * <p>域名列表</p>
   */
  DomainNameList: DomainNames[] | undefined;

  /**
   * <p>桶类别</p>
   */
  StorageClass?: StorageClass | string;

  /**
   * <p>转储桶信息</p>
   */
  TransferBucketName?: TransferOrRestoreBucketName;

  /**
   * <p>恢复桶信息</p>
   */
  RestoreEXBucketName?: TransferOrRestoreBucketName;

  Status?: Status | string;
}

export namespace StatisticConfiguration {
  export const filterSensitiveLog = (obj: StatisticConfiguration): any => ({
    ...obj,
  });
}

export interface StorageClassStatisticsList {
  /**
   * <p>存储类别</p>
   */
  StorageClass?: string;

  /**
   * <p>对象数量</p>
   */
  ObjectNumber?: string;

  /**
   * <p>对象容量</p>
   */
  ObjectSize?: string;
}

export namespace StorageClassStatisticsList {
  export const filterSensitiveLog = (obj: StorageClassStatisticsList): any => ({
    ...obj,
  });
}

export interface TaggingConfiguration {
  Status?: Status | string;
}

export namespace TaggingConfiguration {
  export const filterSensitiveLog = (obj: TaggingConfiguration): any => ({
    ...obj,
  });
}

export type MFADelete = "Disabled" | "Enabled";

export type BucketVersioningStatus = "Disabled" | "Enabled" | "Suspended";

/**
 * <p>Describes the versioning state of an Amazon S3 bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTVersioningStatus.html">PUT
 *             Bucket versioning</a> in the <i>Amazon Simple Storage Service API Reference</i>.</p>
 */
export interface VersioningConfiguration {
  /**
   * <p>Specifies whether MFA delete is enabled in the bucket versioning configuration. This
   *          element is only returned if the bucket has been configured with MFA delete. If the bucket
   *          has never been so configured, this element is not returned.</p>
   */
  MFADelete?: MFADelete | string;

  /**
   * <p>The versioning state of the bucket.</p>
   */
  Status?: BucketVersioningStatus | string;
}

export namespace VersioningConfiguration {
  export const filterSensitiveLog = (obj: VersioningConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p> In terms of implementation, a Bucket is a resource. An Amazon S3 bucket name is globally
 *          unique, and the namespace is shared by all AWS accounts. </p>
 */
export interface Bucket {
  /**
   * <p>The ID of the bucket.</p>
   */
  ID?: number;

  /**
   * <p>The name of the bucket.</p>
   */
  Name?: string;

  /**
   * <p>Date the bucket was created. This date can change when making changes to your bucket, such as editing its bucket policy.</p>
   */
  CreationDate?: Date;

  /**
   * <p>Date the quota of bucket was created.</p>
   */
  Quota?: Quota;

  /**
   * <p>Date the ObjectNumber of bucket was created.</p>
   */
  ObjectNumber?: number;

  /**
   * <p>Date the Size of bucket was created.</p>
   */
  Size?: number;

  /**
   * <p>对象压缩后容量</p>
   */
  CompressSize?: number;

  /**
   * <p>对象压缩率</p>
   */
  CompressRatio?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that
   *          Amazon S3 assumes when replicating objects. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-how-setup.html">How to Set Up
   *             Replication</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  PhysicalSize: number | undefined;

  TrashObjectNumber?: number;
  TrashSize?: number;
  /**
   * <p>Date the StoragePoolId of bucket was created.</p>
   */
  StoragePoolId?: string;

  /**
   * <p>VersionId used to reference a specific version of the object.</p>
   */
  VersionId?: string;

  /**
   * <p>Date the EndPoint of bucket was created.</p>
   */
  EndPoint?: string;

  /**
   * <p>Container for setting the versioning state.</p>
   */
  VersioningConfiguration?: VersioningConfiguration;

  /**
   * <p>The specified bucket's Object Lock configuration.</p>
   */
  ObjectLockConfiguration?: ObjectLockConfiguration;

  /**
   * <p>Container for lifecycle rules. You can add as many as 1,000 rules.</p>
   */
  LifecycleConfiguration?: BucketLifecycleConfiguration;

  /**
   * <p>OSCP configuration.</p>
   */
  OSCPConfiguration?: BucketOSCPConfiguration;

  /**
   * <p>MetaSearch configuration.</p>
   */
  MetaSearchConfiguration?: MetaSearchConfiguration;

  /**
   * <p>Describes the cross-origin access configuration for objects in an Amazon S3 bucket. For more
   *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html">Enabling Cross-Origin Resource
   *             Sharing</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  CORSConfiguration?: CORSConfiguration;

  /**
   * <p>The configuration information for the bucket.</p>
   */
  RefererConfiguration?: RefererConfiguration;

  /**
   * <p>The configuration information for the bucket.</p>
   */
  ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;

  /**
   * <p>The configuration information for the bucket.</p>
   */
  LoggingConfiguration?: BucketLoggingConfiguration;

  /**
   * <p>The configuration information for the bucket.</p>
   */
  TaggingConfiguration?: TaggingConfiguration;

  /**
   * <p>The configuration information for the bucket.</p>
   */
  PolicyConfiguration?: PolicyConfiguration;

  /**
   * <p>The configuration information for the bucket.</p>
   */
  QoSConfiguration?: QoSConfiguration;

  /**
   * <p>The configuration information for the bucket.</p>
   */
  ArchiveDirectReadConfiguration?: ArchiveDirectReadConfiguration;

  /**
   * <p>The configuration information for the bucket.</p>
   */
  BtsConfiguration?: BtsConfiguration;

  /**
   * <p>获取桶统计计量配置请求返回值</p>
   */
  StatisticConfiguration?: StatisticConfiguration;

  /**
   * <p>The configuration information for the bucket.</p>
   */
  BucketRedundancyConfiguration?: BucketRedundancyConfiguration;

  /**
   * <p>bucket storage class.</p>
   */
  DefaultStorageClass?: StorageClass | string;

  /**
   * <p>Describes the cross-origin access configuration for objects in an Amazon S3 bucket. For more
   *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html">Enabling Cross-Origin Resource
   *             Sharing</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  RepPairConfiguration?: RepPairConfiguration;

  /**
   * 在桶概览中添加桶重删的相关信息，如果存在桶重删的话，在返回结构中插入下面信息
   */
  DedupConfiguration?: BucketDedupConfiguration;

  /**
   * 在桶概览中添加回收站信息
   */
  TrashConfiguration?: TrashConfiguration;

  /**
   * 在桶概览中添加回收站信息
   */
  SnapConfiguration?: TrashConfiguration;

  /**
   * 桶的归档存储配置
   */
  GlacierConfiguration?: string;

  /**
   * <p>不同存储类别对象统计</p>
   */
  StorageClassStatistics?: StorageClassStatisticsList[];

  /**
   * 已归档对象数量
   */
  ArchivedObjectNumber?: number;

  /**
   * 已归档对象容量
   */
  ArchivedObjectSize?: number;

  /**
   * 已恢复对象数量
   */
  RestoredObjectNumber?: number;

  /**
   * 已恢复对象容量
   */
  RestoredObjectSize?: number;

  /**
   * 当前桶是否配置压缩策略
   */
  CompressionConfiguration?: CompressionConfigurations;

  /**
   * 桶曾经是否配置过压缩策略
   */
  HistoryCompressionConfiguration?: CompressionConfigurations;

  /**
   * <p>是否为私有桶</p>
   */
  IsPrivateBucket?: boolean;
}

export namespace Bucket {
  export const filterSensitiveLog = (obj: Bucket): any => ({
    ...obj,
    ...(obj.LifecycleConfiguration && {
      LifecycleConfiguration: BucketLifecycleConfiguration.filterSensitiveLog(obj.LifecycleConfiguration),
    }),
    ...(obj.ServerSideEncryptionConfiguration && {
      ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration.filterSensitiveLog(
        obj.ServerSideEncryptionConfiguration
      ),
    }),
  });
}

export interface ListBucketResult {
  /**
   * <p>The bucket owned by the requestor.</p>
   */
  Bucket?: Bucket;

  /**
   * <p>The owner of the bucket listed.</p>
   */
  Owner?: Owner;
}

export namespace ListBucketResult {
  export const filterSensitiveLog = (obj: ListBucketResult): any => ({
    ...obj,
    ...(obj.Bucket && { Bucket: Bucket.filterSensitiveLog(obj.Bucket) }),
  });
}

export interface GetBucketOverviewOutput {
  /**
   * <p>The <code>ListBucketResult</code> of bucket.</p>
   */
  ListBucketResult?: ListBucketResult;
}

export namespace GetBucketOverviewOutput {
  export const filterSensitiveLog = (obj: GetBucketOverviewOutput): any => ({
    ...obj,
    ...(obj.ListBucketResult && { ListBucketResult: ListBucketResult.filterSensitiveLog(obj.ListBucketResult) }),
  });
}

export interface GetBucketOverviewRequest {
  /**
   * <p>The name of the Amazon S3 bucket whose <code>Overview</code> you want to retrieve.
   *       </p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetBucketOverviewRequest {
  export const filterSensitiveLog = (obj: GetBucketOverviewRequest): any => ({
    ...obj,
  });
}

export type ObjectOwnership = "BucketOwnerPreferred" | "ObjectWriter";

/**
 * <p>The container element for an ownership control rule.</p>
 */
export interface OwnershipControlsRule {
  /**
   * <p>The container element for object ownership for a bucket's ownership controls.</p>
   *          <p>BucketOwnerPreferred - Objects uploaded to the bucket change ownership to the bucket
   *          owner if the objects are uploaded with the <code>bucket-owner-full-control</code> canned
   *          ACL.</p>
   *          <p>ObjectWriter - The uploading account will own the object if the object is uploaded with
   *          the <code>bucket-owner-full-control</code> canned ACL.</p>
   */
  ObjectOwnership: ObjectOwnership | string | undefined;
}

export namespace OwnershipControlsRule {
  export const filterSensitiveLog = (obj: OwnershipControlsRule): any => ({
    ...obj,
  });
}

/**
 * <p>The container element for a bucket's ownership controls.</p>
 */
export interface OwnershipControls {
  /**
   * <p>The container element for an ownership control rule.</p>
   */
  Rules: OwnershipControlsRule[] | undefined;
}

export namespace OwnershipControls {
  export const filterSensitiveLog = (obj: OwnershipControls): any => ({
    ...obj,
  });
}

export interface GetBucketOwnershipControlsOutput {
  /**
   * <p>The <code>OwnershipControls</code> (BucketOwnerPreferred or ObjectWriter) currently in
   *          effect for this Amazon S3 bucket.</p>
   */
  OwnershipControls?: OwnershipControls;
}

export namespace GetBucketOwnershipControlsOutput {
  export const filterSensitiveLog = (obj: GetBucketOwnershipControlsOutput): any => ({
    ...obj,
  });
}

export interface GetBucketOwnershipControlsRequest {
  /**
   * <p>The name of the Amazon S3 bucket whose <code>OwnershipControls</code> you want to retrieve.
   *       </p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetBucketOwnershipControlsRequest {
  export const filterSensitiveLog = (obj: GetBucketOwnershipControlsRequest): any => ({
    ...obj,
  });
}

export interface GetBucketPolicyOutput {
  /**
   * <p>The bucket policy as a JSON document.</p>
   */
  Policy?: string;
}

export namespace GetBucketPolicyOutput {
  export const filterSensitiveLog = (obj: GetBucketPolicyOutput): any => ({
    ...obj,
  });
}

export interface GetBucketPolicyRequest {
  /**
   * <p>The bucket name for which to get the bucket policy.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetBucketPolicyRequest {
  export const filterSensitiveLog = (obj: GetBucketPolicyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The container element for a bucket's policy status.</p>
 */
export interface PolicyStatus {
  /**
   * <p>The policy status for this bucket. <code>TRUE</code> indicates that this bucket is
   *          public. <code>FALSE</code> indicates that the bucket is not public.</p>
   */
  IsPublic?: boolean;
}

export namespace PolicyStatus {
  export const filterSensitiveLog = (obj: PolicyStatus): any => ({
    ...obj,
  });
}

export interface GetBucketPolicyStatusOutput {
  /**
   * <p>The policy status for the specified bucket.</p>
   */
  PolicyStatus?: PolicyStatus;
}

export namespace GetBucketPolicyStatusOutput {
  export const filterSensitiveLog = (obj: GetBucketPolicyStatusOutput): any => ({
    ...obj,
  });
}

export interface GetBucketPolicyStatusRequest {
  /**
   * <p>The name of the Amazon S3 bucket whose policy status you want to retrieve.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetBucketPolicyStatusRequest {
  export const filterSensitiveLog = (obj: GetBucketPolicyStatusRequest): any => ({
    ...obj,
  });
}

export interface GetBucketQoSRequest {
  /**
   * <p>The name of the bucket from which an analytics configuration is deleted.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetBucketQoSRequest {
  export const filterSensitiveLog = (obj: GetBucketQoSRequest): any => ({
    ...obj,
  });
}

export interface GetBucketQoSResponse {
  /**
   * <p>The <code>GetBucketQuota</code> of bucket.</p>
   */
  QoSConfiguration?: QoSConfiguration;
}

export namespace GetBucketQoSResponse {
  export const filterSensitiveLog = (obj: GetBucketQoSResponse): any => ({
    ...obj,
  });
}

export interface GetBucketQuotaOutput {
  /**
   * <p>The <code>GetBucketQuota</code> of bucket.</p>
   */
  Quota?: Quota;
}

export namespace GetBucketQuotaOutput {
  export const filterSensitiveLog = (obj: GetBucketQuotaOutput): any => ({
    ...obj,
  });
}

export interface GetBucketQuotaRequest {
  /**
   * <p>The name of the Amazon S3 bucket whose <code>Overview</code> you want to retrieve.
   *       </p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetBucketQuotaRequest {
  export const filterSensitiveLog = (obj: GetBucketQuotaRequest): any => ({
    ...obj,
  });
}

export type DeleteMarkerReplicationStatus = "Disabled" | "Enabled";

/**
 * <p>Specifies whether Amazon S3 replicates delete markers. If you specify a <code>Filter</code>
 *          in your replication configuration, you must also include a
 *             <code>DeleteMarkerReplication</code> element. If your <code>Filter</code> includes a
 *             <code>Tag</code> element, the <code>DeleteMarkerReplication</code>
 *             <code>Status</code> must be set to Disabled, because Amazon S3 does not support replicating
 *          delete markers for tag-based rules. For an example configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-config-min-rule-config">Basic Rule Configuration</a>. </p>
 *          <p>For more information about delete marker replication, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/delete-marker-replication.html">Basic Rule
 *             Configuration</a>. </p>
 *          <note>
 *             <p>If you are using an earlier version of the replication configuration, Amazon S3 handles
 *             replication of delete markers differently. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-backward-compat-considerations">Backward Compatibility</a>.</p>
 *          </note>
 */
export interface DeleteMarkerReplication {
  /**
   * <p>Indicates whether to replicate delete markers.</p>
   *          <note>
   *             <p>Indicates whether to replicate delete markers.</p>
   *          </note>
   */
  Status?: DeleteMarkerReplicationStatus | string;
}

export namespace DeleteMarkerReplication {
  export const filterSensitiveLog = (obj: DeleteMarkerReplication): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies encryption-related information for an Amazon S3 bucket that is a destination for
 *          replicated objects.</p>
 */
export interface EncryptionConfiguration {
  /**
   * <p>Specifies the ID (Key ARN or Alias ARN) of the customer managed customer master key
   *          (CMK) stored in AWS Key Management Service (KMS) for the destination bucket. Amazon S3 uses
   *          this key to encrypt replica objects. Amazon S3 only supports symmetric customer managed CMKs.
   *          For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and
   *             Asymmetric Keys</a> in the <i>AWS Key Management Service Developer
   *             Guide</i>.</p>
   */
  ReplicaKmsKeyID?: string;
}

export namespace EncryptionConfiguration {
  export const filterSensitiveLog = (obj: EncryptionConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p> A container specifying the time value for S3 Replication Time Control (S3 RTC) and replication metrics
 *             <code>EventThreshold</code>. </p>
 */
export interface ReplicationTimeValue {
  /**
   * <p> Contains an integer specifying time in minutes. </p>
   *          <p> Valid values: 15 minutes. </p>
   */
  Minutes?: number;
}

export namespace ReplicationTimeValue {
  export const filterSensitiveLog = (obj: ReplicationTimeValue): any => ({
    ...obj,
  });
}

export type MetricsStatus = "Disabled" | "Enabled";

/**
 * <p> A container specifying replication metrics-related settings enabling replication
 *          metrics and events.</p>
 */
export interface Metrics {
  /**
   * <p> Specifies whether the replication metrics are enabled. </p>
   */
  Status: MetricsStatus | string | undefined;

  /**
   * <p> A container specifying the time threshold for emitting the
   *             <code>s3:Replication:OperationMissedThreshold</code> event. </p>
   */
  EventThreshold?: ReplicationTimeValue;
}

export namespace Metrics {
  export const filterSensitiveLog = (obj: Metrics): any => ({
    ...obj,
  });
}

export type ReplicationTimeStatus = "Disabled" | "Enabled";

/**
 * <p> A container specifying S3 Replication Time Control (S3 RTC) related information, including whether S3 RTC is
 *          enabled and the time when all objects and operations on objects must be replicated. Must be
 *          specified together with a <code>Metrics</code> block. </p>
 */
export interface ReplicationTime {
  /**
   * <p> Specifies whether the replication time is enabled. </p>
   */
  Status: ReplicationTimeStatus | string | undefined;

  /**
   * <p> A container specifying the time by which replication should be complete for all objects
   *          and operations on objects. </p>
   */
  Time: ReplicationTimeValue | undefined;
}

export namespace ReplicationTime {
  export const filterSensitiveLog = (obj: ReplicationTime): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies information about where to publish analysis or configuration results for an
 *          Amazon S3 bucket and S3 Replication Time Control (S3 RTC).</p>
 */
export interface Destination {
  /**
   * <p> The Amazon Resource Name (ARN) of the bucket where you want Amazon S3 to store the
   *          results.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Destination bucket owner account ID. In a cross-account scenario, if you direct Amazon S3 to
   *          change replica ownership to the AWS account that owns the destination bucket by specifying
   *          the <code>AccessControlTranslation</code> property, this is the account ID of the
   *          destination bucket owner. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-change-owner.html">Replication Additional
   *             Configuration: Changing the Replica Owner</a> in the <i>Amazon Simple Storage
   *             Service Developer Guide</i>.</p>
   */
  Account?: string;

  /**
   * <p> The storage class to use when replicating objects, such as S3 Standard or reduced
   *          redundancy. By default, Amazon S3 uses the storage class of the source object to create the
   *          object replica. </p>
   *          <p>For valid values, see the <code>StorageClass</code> element of the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTreplication.html">PUT Bucket
   *             replication</a> action in the <i>Amazon Simple Storage Service API Reference</i>.</p>
   */
  StorageClass?: StorageClass | string;

  /**
   * <p>Specify this only in a cross-account scenario (where source and destination bucket
   *          owners are not the same), and you want to change replica ownership to the AWS account that
   *          owns the destination bucket. If this is not specified in the replication configuration, the
   *          replicas are owned by same AWS account that owns the source object.</p>
   */
  AccessControlTranslation?: AccessControlTranslation;

  /**
   * <p>A container that provides information about encryption. If
   *             <code>SourceSelectionCriteria</code> is specified, you must specify this element.</p>
   */
  EncryptionConfiguration?: EncryptionConfiguration;

  /**
   * <p> A container specifying S3 Replication Time Control (S3 RTC), including whether S3 RTC is enabled and the time
   *          when all objects and operations on objects must be replicated. Must be specified together
   *          with a <code>Metrics</code> block. </p>
   */
  ReplicationTime?: ReplicationTime;

  /**
   * <p> A container specifying replication metrics-related settings enabling replication
   *          metrics and events. </p>
   */
  Metrics?: Metrics;
}

export namespace Destination {
  export const filterSensitiveLog = (obj: Destination): any => ({
    ...obj,
  });
}

export type ExistingObjectReplicationStatus = "Disabled" | "Enabled";

/**
 * <p>Optional configuration to replicate existing source bucket objects. For more
 *          information, see <a href=" https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-what-is-isnot-replicated.html#existing-object-replication">Replicating Existing Objects</a> in the <i>Amazon S3 Developer Guide</i>.
 *       </p>
 */
export interface ExistingObjectReplication {
  /**
   * <p></p>
   */
  Status: ExistingObjectReplicationStatus | string | undefined;
}

export namespace ExistingObjectReplication {
  export const filterSensitiveLog = (obj: ExistingObjectReplication): any => ({
    ...obj,
  });
}

/**
 * <p>A container for specifying rule filters. The filters determine the subset of objects to
 *          which the rule applies. This element is required only if you specify more than one filter. </p>
 *          <p>For example:</p>
 *          <ul>
 *             <li>
 *                <p>If you specify both a <code>Prefix</code> and a <code>Tag</code> filter, wrap
 *                these filters in an <code>And</code> tag. </p>
 *             </li>
 *             <li>
 *                <p>If you specify a filter based on multiple tags, wrap the <code>Tag</code> elements
 *                in an <code>And</code> tag</p>
 *             </li>
 *          </ul>
 */
export interface ReplicationRuleAndOperator {
  /**
   * <p>An object key name prefix that identifies the subset of objects to which the rule
   *          applies.</p>
   */
  Prefix?: string;

  /**
   * <p>An array of tags containing key and value pairs.</p>
   */
  Tags?: Tag[];
}

export namespace ReplicationRuleAndOperator {
  export const filterSensitiveLog = (obj: ReplicationRuleAndOperator): any => ({
    ...obj,
  });
}

/**
 * <p>A filter that identifies the subset of objects to which the replication rule applies. A
 *             <code>Filter</code> must specify exactly one <code>Prefix</code>, <code>Tag</code>, or
 *          an <code>And</code> child element.</p>
 */
export type ReplicationRuleFilter =
  | ReplicationRuleFilter.AndMember
  | ReplicationRuleFilter.PrefixMember
  | ReplicationRuleFilter.TagMember
  | ReplicationRuleFilter.$UnknownMember;

export namespace ReplicationRuleFilter {
  /**
   * <p>An object key name prefix that identifies the subset of objects to which the rule
   *          applies.</p>
   */
  export interface PrefixMember {
    Prefix: string;
    Tag?: never;
    And?: never;
    $unknown?: never;
  }

  /**
   * <p>A container for specifying a tag key and value. </p>
   *          <p>The rule applies only to objects that have the tag in their tag set.</p>
   */
  export interface TagMember {
    Prefix?: never;
    Tag: Tag;
    And?: never;
    $unknown?: never;
  }

  /**
   * <p>A container for specifying rule filters. The filters determine the subset of objects to
   *          which the rule applies. This element is required only if you specify more than one filter.
   *          For example: </p>
   *          <ul>
   *             <li>
   *                <p>If you specify both a <code>Prefix</code> and a <code>Tag</code> filter, wrap
   *                these filters in an <code>And</code> tag.</p>
   *             </li>
   *             <li>
   *                <p>If you specify a filter based on multiple tags, wrap the <code>Tag</code> elements
   *                in an <code>And</code> tag.</p>
   *             </li>
   *          </ul>
   */
  export interface AndMember {
    Prefix?: never;
    Tag?: never;
    And: ReplicationRuleAndOperator;
    $unknown?: never;
  }

  export interface $UnknownMember {
    Prefix?: never;
    Tag?: never;
    And?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Prefix: (value: string) => T;
    Tag: (value: Tag) => T;
    And: (value: ReplicationRuleAndOperator) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ReplicationRuleFilter, visitor: Visitor<T>): T => {
    if (value.Prefix !== undefined) return visitor.Prefix(value.Prefix);
    if (value.Tag !== undefined) return visitor.Tag(value.Tag);
    if (value.And !== undefined) return visitor.And(value.And);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  export const filterSensitiveLog = (obj: ReplicationRuleFilter): any => {
    if (obj.Prefix !== undefined) return { Prefix: obj.Prefix };
    if (obj.Tag !== undefined) return { Tag: Tag.filterSensitiveLog(obj.Tag) };
    if (obj.And !== undefined) return { And: ReplicationRuleAndOperator.filterSensitiveLog(obj.And) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

export type ReplicaModificationsStatus = "Disabled" | "Enabled";

/**
 * <p>A filter that you can specify for selection for modifications on replicas. Amazon S3 doesn't
 *          replicate replica modifications by default. In the latest version of replication
 *          configuration (when <code>Filter</code> is specified), you can specify this element and set
 *          the status to <code>Enabled</code> to replicate modifications on replicas. </p>
 *          <note>
 *             <p> If you don't specify the <code>Filter</code> element, Amazon S3 assumes that the
 *             replication configuration is the earlier version, V1. In the earlier version, this
 *             element is not allowed.</p>
 *          </note>
 */
export interface ReplicaModifications {
  /**
   * <p>Specifies whether Amazon S3 replicates modifications on replicas.</p>
   */
  Status: ReplicaModificationsStatus | string | undefined;
}

export namespace ReplicaModifications {
  export const filterSensitiveLog = (obj: ReplicaModifications): any => ({
    ...obj,
  });
}

export type SseKmsEncryptedObjectsStatus = "Disabled" | "Enabled";

/**
 * <p>A container for filter information for the selection of S3 objects encrypted with AWS
 *          KMS.</p>
 */
export interface SseKmsEncryptedObjects {
  /**
   * <p>Specifies whether Amazon S3 replicates objects created with server-side encryption using a
   *          customer master key (CMK) stored in AWS Key Management Service.</p>
   */
  Status: SseKmsEncryptedObjectsStatus | string | undefined;
}

export namespace SseKmsEncryptedObjects {
  export const filterSensitiveLog = (obj: SseKmsEncryptedObjects): any => ({
    ...obj,
  });
}

/**
 * <p>A container that describes additional filters for identifying the source objects that
 *          you want to replicate. You can choose to enable or disable the replication of these
 *          objects. Currently, Amazon S3 supports only the filter that you can specify for objects created
 *          with server-side encryption using a customer master key (CMK) stored in AWS Key Management
 *          Service (SSE-KMS).</p>
 */
export interface SourceSelectionCriteria {
  /**
   * <p> A container for filter information for the selection of Amazon S3 objects encrypted with AWS
   *          KMS. If you include <code>SourceSelectionCriteria</code> in the replication configuration,
   *          this element is required. </p>
   */
  SseKmsEncryptedObjects?: SseKmsEncryptedObjects;

  /**
   * <p>A filter that you can specify for selections for modifications on replicas. Amazon S3 doesn't
   *          replicate replica modifications by default. In the latest version of replication
   *          configuration (when <code>Filter</code> is specified), you can specify this element and set
   *          the status to <code>Enabled</code> to replicate modifications on replicas. </p>
   *          <note>
   *             <p> If you don't specify the <code>Filter</code> element, Amazon S3 assumes that the
   *             replication configuration is the earlier version, V1. In the earlier version, this
   *             element is not allowed</p>
   *          </note>
   */
  ReplicaModifications?: ReplicaModifications;
}

export namespace SourceSelectionCriteria {
  export const filterSensitiveLog = (obj: SourceSelectionCriteria): any => ({
    ...obj,
  });
}

export type ReplicationRuleStatus = "Disabled" | "Enabled";

/**
 * <p>Specifies which Amazon S3 objects to replicate and where to store the replicas.</p>
 */
export interface ReplicationRule {
  /**
   * <p>A unique identifier for the rule. The maximum value is 255 characters.</p>
   */
  ID?: string;

  /**
   * <p>The priority indicates which rule has precedence whenever two or more replication rules
   *          conflict. Amazon S3 will attempt to replicate objects according to all replication rules.
   *          However, if there are two or more rules with the same destination bucket, then objects will
   *          be replicated according to the rule with the highest priority. The higher the number, the
   *          higher the priority. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication.html">Replication</a> in the
   *             <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Priority?: number;

  /**
   * @deprecated
   *
   * <p>An object key name prefix that identifies the object or objects to which the rule
   *          applies. The maximum prefix length is 1,024 characters. To include all objects in a bucket,
   *          specify an empty string. </p>
   */
  Prefix?: string;

  /**
   * <p>A filter that identifies the subset of objects to which the replication rule applies. A
   *             <code>Filter</code> must specify exactly one <code>Prefix</code>, <code>Tag</code>, or
   *          an <code>And</code> child element.</p>
   */
  Filter?: ReplicationRuleFilter;

  /**
   * <p>Specifies whether the rule is enabled.</p>
   */
  Status: ReplicationRuleStatus | string | undefined;

  /**
   * <p>A container that describes additional filters for identifying the source objects that
   *          you want to replicate. You can choose to enable or disable the replication of these
   *          objects. Currently, Amazon S3 supports only the filter that you can specify for objects created
   *          with server-side encryption using a customer master key (CMK) stored in AWS Key Management
   *          Service (SSE-KMS).</p>
   */
  SourceSelectionCriteria?: SourceSelectionCriteria;

  /**
   * <p></p>
   */
  ExistingObjectReplication?: ExistingObjectReplication;

  /**
   * <p>A container for information about the replication destination and its configurations
   *          including enabling the S3 Replication Time Control (S3 RTC).</p>
   */
  Destination: Destination | undefined;

  /**
   * <p>Specifies whether Amazon S3 replicates delete markers. If you specify a <code>Filter</code>
   *          in your replication configuration, you must also include a
   *             <code>DeleteMarkerReplication</code> element. If your <code>Filter</code> includes a
   *             <code>Tag</code> element, the <code>DeleteMarkerReplication</code>
   *             <code>Status</code> must be set to Disabled, because Amazon S3 does not support replicating
   *          delete markers for tag-based rules. For an example configuration, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-config-min-rule-config">Basic Rule Configuration</a>. </p>
   *          <p>For more information about delete marker replication, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/delete-marker-replication.html">Basic Rule
   *             Configuration</a>. </p>
   *          <note>
   *             <p>If you are using an earlier version of the replication configuration, Amazon S3 handles
   *             replication of delete markers differently. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-backward-compat-considerations">Backward Compatibility</a>.</p>
   *          </note>
   */
  DeleteMarkerReplication?: DeleteMarkerReplication;
}

export namespace ReplicationRule {
  export const filterSensitiveLog = (obj: ReplicationRule): any => ({
    ...obj,
    ...(obj.Filter && { Filter: ReplicationRuleFilter.filterSensitiveLog(obj.Filter) }),
  });
}

/**
 * <p>A container for replication rules. You can add up to 1,000 rules. The maximum size of a
 *          replication configuration is 2 MB.</p>
 */
export interface ReplicationConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that
   *          Amazon S3 assumes when replicating objects. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-how-setup.html">How to Set Up
   *             Replication</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Role: string | undefined;

  /**
   * <p>A container for one or more replication rules. A replication configuration must have at
   *          least one rule and can contain a maximum of 1,000 rules. </p>
   */
  Rules: ReplicationRule[] | undefined;
}

export namespace ReplicationConfiguration {
  export const filterSensitiveLog = (obj: ReplicationConfiguration): any => ({
    ...obj,
    ...(obj.Rules && { Rules: obj.Rules.map((item) => ReplicationRule.filterSensitiveLog(item)) }),
  });
}

export interface GetBucketReplicationOutput {
  /**
   * <p>A container for replication rules. You can add up to 1,000 rules. The maximum size of a
   *          replication configuration is 2 MB.</p>
   */
  ReplicationConfiguration?: ReplicationConfiguration;
}

export namespace GetBucketReplicationOutput {
  export const filterSensitiveLog = (obj: GetBucketReplicationOutput): any => ({
    ...obj,
    ...(obj.ReplicationConfiguration && {
      ReplicationConfiguration: ReplicationConfiguration.filterSensitiveLog(obj.ReplicationConfiguration),
    }),
  });
}

export interface GetBucketReplicationRequest {
  /**
   * <p>The bucket name for which to get the replication information.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetBucketReplicationRequest {
  export const filterSensitiveLog = (obj: GetBucketReplicationRequest): any => ({
    ...obj,
  });
}

export type Payer = "BucketOwner" | "Requester";

export interface GetBucketRequestPaymentOutput {
  /**
   * <p>Specifies who pays for the download and request fees.</p>
   */
  Payer?: Payer | string;
}

export namespace GetBucketRequestPaymentOutput {
  export const filterSensitiveLog = (obj: GetBucketRequestPaymentOutput): any => ({
    ...obj,
  });
}

export interface GetBucketRequestPaymentRequest {
  /**
   * <p>The name of the bucket for which to get the payment request configuration</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetBucketRequestPaymentRequest {
  export const filterSensitiveLog = (obj: GetBucketRequestPaymentRequest): any => ({
    ...obj,
  });
}

export interface GetBucketSnapshotOutput {
  /**
   * <p>Snapshot</p>
   */
  Snapshot?: Snapshot;
}

export namespace GetBucketSnapshotOutput {
  export const filterSensitiveLog = (obj: GetBucketSnapshotOutput): any => ({
    ...obj,
  });
}

export interface GetBucketSnapshotRequest {
  /**
   * <p>BucketName</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Snapshot Name</p>
   */
  Name: string | undefined;
}

export namespace GetBucketSnapshotRequest {
  export const filterSensitiveLog = (obj: GetBucketSnapshotRequest): any => ({
    ...obj,
  });
}

export interface GetBucketStatisticOutput {
  /**
   * <p>获取桶统计计量配置请求返回值</p>
   */
  StatisticConfiguration?: StatisticConfiguration;
}

export namespace GetBucketStatisticOutput {
  export const filterSensitiveLog = (obj: GetBucketStatisticOutput): any => ({
    ...obj,
  });
}

export interface GetBucketStatisticRequest {
  /**
   * <p>获取桶统计计量配置请求参数</p>
   */
  Bucket: string | undefined;
}

export namespace GetBucketStatisticRequest {
  export const filterSensitiveLog = (obj: GetBucketStatisticRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A container for replication rules. You can add up to 1,000 rules. The maximum size of a
 *          replication configuration is 2 MB.</p>
 */
export interface GetBucketStorageInfoResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that
   *          Amazon S3 assumes when replicating objects. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-how-setup.html">How to Set Up
   *             Replication</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  ObjectNumber: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that
   *          Amazon S3 assumes when replicating objects. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-how-setup.html">How to Set Up
   *             Replication</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  PhysicalSize: number | undefined;

  /**
   * <p>A container for one or more replication rules. A replication configuration must have at
   *          least one rule and can contain a maximum of 1,000 rules. </p>
   */
  Size: number | undefined;

  TrashObjectNumber?: number;
  TrashSize?: number;
}

export namespace GetBucketStorageInfoResult {
  export const filterSensitiveLog = (obj: GetBucketStorageInfoResult): any => ({
    ...obj,
  });
}

export interface GetBucketStorageInfoOutput {
  /**
   * <p>The storage info of the bucket.</p>
   */
  GetBucketStorageInfoResult?: GetBucketStorageInfoResult;
}

export namespace GetBucketStorageInfoOutput {
  export const filterSensitiveLog = (obj: GetBucketStorageInfoOutput): any => ({
    ...obj,
  });
}

export interface GetBucketStorageInfoRequest {
  /**
   * <p>The name of the bucket for which to get the payment request configuration</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetBucketStorageInfoRequest {
  export const filterSensitiveLog = (obj: GetBucketStorageInfoRequest): any => ({
    ...obj,
  });
}

export interface GetBucketTaggingOutput {
  /**
   * <p>Contains the tag set.</p>
   */
  TagSet: Tag[] | undefined;
}

export namespace GetBucketTaggingOutput {
  export const filterSensitiveLog = (obj: GetBucketTaggingOutput): any => ({
    ...obj,
  });
}

export interface GetBucketTaggingRequest {
  /**
   * <p>The name of the bucket for which to get the tagging information.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace GetBucketTaggingRequest {
  export const filterSensitiveLog = (obj: GetBucketTaggingRequest): any => ({
    ...obj,
  });
}

export interface Mode {
  /**
   * <p>The <code>BucetTrashNeverExpire</code> of bucket.</p>
   */
  NeverExpire?: boolean;

  /**
   * <p>Lifetime of the active copy in days. Do not use with restores that specify
   *             <code>OutputLocation</code>.</p>
   *          <p>The Days element is required for regular restores, and must not be provided for select
   *          requests.</p>
   */
  Days?: number;
}

export namespace Mode {
  export const filterSensitiveLog = (obj: Mode): any => ({
    ...obj,
  });
}

export interface Trash {
  Status?: BucketTrashStatus | string;
  /**
   * <p>The <code>BucetTrashMode</code> of bucket.</p>
   */
  Mode?: Mode;
}

export namespace Trash {
  export const filterSensitiveLog = (obj: Trash): any => ({
    ...obj,
  });
}

export interface GetBucketTrashOutput {
  /**
   * <p>回收站配置信息</p>
   */
  Trash?: Trash;
}

export namespace GetBucketTrashOutput {
  export const filterSensitiveLog = (obj: GetBucketTrashOutput): any => ({
    ...obj,
  });
}

export interface GetBucketTrashRequest {
  /**
   * <p>BucketName</p>
   */
  Bucket: string | undefined;
}

export namespace GetBucketTrashRequest {
  export const filterSensitiveLog = (obj: GetBucketTrashRequest): any => ({
    ...obj,
  });
}

export type ObjectStorageClass =
  | "DEEP_ARCHIVE"
  | "GLACIER"
  | "INTELLIGENT_TIERING"
  | "ONEZONE_IA"
  | "OUTPOSTS"
  | "REDUCED_REDUNDANCY"
  | "STANDARD"
  | "STANDARD_IA";
