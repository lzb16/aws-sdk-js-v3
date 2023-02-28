import {
  AccelerateConfiguration,
  AccessControlPolicy,
  AnalyticsConfiguration,
  BucketCannedACL,
  BucketLifecycleConfiguration,
  CORSConfiguration,
  CommonPrefix,
  DeleteMarkerEntry,
  EncodingType,
  ErrorDocument,
  Grant,
  IndexDocument,
  Initiator,
  IntelligentTieringConfiguration,
  InventoryConfiguration,
  LoggingEnabled,
  MetricsConfiguration,
  NotificationConfiguration,
  OSCPPolicy,
  ObjectCannedACL,
  ObjectLockConfiguration,
  ObjectLockLegalHold,
  ObjectLockLegalHoldStatus,
  ObjectLockMode,
  ObjectLockRetention,
  ObjectVersionStorageClass,
  Owner,
  OwnershipControls,
  Payer,
  PublicAccessBlockConfiguration,
  QoSConfiguration,
  Quota,
  RedirectAllRequestsTo,
  RefererConfiguration,
  ReplicationConfiguration,
  RequestCharged,
  RequestPayer,
  RoutingRule,
  ServerSideEncryption,
  ServerSideEncryptionConfiguration,
  StorageClass,
  Tag,
  VersioningConfiguration,
  WORMConfiguration,
  WORMRetainPeriod,
} from "./models_0";
import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";
import { Readable } from "stream";

/**
 * <p>The version of an object.</p>
 */
export interface ObjectVersion {
  /**
   * <p>The entity tag is an MD5 hash of that version of the object.</p>
   */
  ETag?: string;

  /**
   * <p>Size in bytes of the object.</p>
   */
  Size?: number;

  /**
   * <p>The class of storage used to store the object.</p>
   */
  StorageClass?: ObjectVersionStorageClass | string;

  /**
   * <p>The object key.</p>
   */
  Key?: string;

  /**
   * <p>Version ID of an object.</p>
   */
  VersionId?: string;

  /**
   * <p>Specifies whether the object is (true) or is not (false) the latest version of an
   *          object.</p>
   */
  IsLatest?: boolean;

  /**
   * <p>Date and time the object was last modified.</p>
   */
  LastModified?: Date;

  /**
   * <p>Specifies the owner of the object.</p>
   */
  Owner?: Owner;
}

export namespace ObjectVersion {
  export const filterSensitiveLog = (obj: ObjectVersion): any => ({
    ...obj,
  });
}

export interface ListObjectVersionsOutput {
  /**
   * <p>A flag that indicates whether Amazon S3 returned all of the results that satisfied the search
   *          criteria. If your results were truncated, you can make a follow-up paginated request using
   *          the NextKeyMarker and NextVersionIdMarker response parameters as a starting place in
   *          another request to return the rest of the results.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p>Marks the last key returned in a truncated response.</p>
   */
  KeyMarker?: string;

  /**
   * <p>Marks the last version of the key returned in a truncated response.</p>
   */
  VersionIdMarker?: string;

  /**
   * <p>When the number of responses exceeds the value of <code>MaxKeys</code>,
   *             <code>NextKeyMarker</code> specifies the first key not returned that satisfies the
   *          search criteria. Use this value for the key-marker request parameter in a subsequent
   *          request.</p>
   */
  NextKeyMarker?: string;

  /**
   * <p>When the number of responses exceeds the value of <code>MaxKeys</code>,
   *             <code>NextVersionIdMarker</code> specifies the first object version not returned that
   *          satisfies the search criteria. Use this value for the version-id-marker request parameter
   *          in a subsequent request.</p>
   */
  NextVersionIdMarker?: string;

  /**
   * <p>Container for version information.</p>
   */
  Versions?: ObjectVersion[];

  /**
   * <p>Container for an object that is a delete marker.</p>
   */
  DeleteMarkers?: DeleteMarkerEntry[];

  /**
   * <p>The bucket name.</p>
   */
  Name?: string;

  /**
   * <p>Selects objects that start with the value supplied by this parameter.</p>
   */
  Prefix?: string;

  /**
   * <p>The delimiter grouping the included keys. A delimiter is a character that you specify to
   *          group keys. All keys that contain the same string between the prefix and the first
   *          occurrence of the delimiter are grouped under a single result element in
   *             <code>CommonPrefixes</code>. These groups are counted as one result against the max-keys
   *          limitation. These keys are not returned elsewhere in the response.</p>
   */
  Delimiter?: string;

  /**
   * <p>Specifies the maximum number of objects to return.</p>
   */
  MaxKeys?: number;

  /**
   * <p>All of the keys rolled up into a common prefix count as a single return when calculating
   *          the number of returns.</p>
   */
  CommonPrefixes?: CommonPrefix[];

  /**
   * <p> Encoding type used by Amazon S3 to encode object key names in the XML response.</p>
   *
   *          <p>If you specify encoding-type request parameter, Amazon S3 includes this element in the
   *          response, and returns encoded key name values in the following response elements:</p>
   *
   *          <p>
   *             <code>KeyMarker, NextKeyMarker, Prefix, Key</code>, and <code>Delimiter</code>.</p>
   */
  EncodingType?: EncodingType | string;

  /**
   * <p>Provides storage class information of the object. Amazon S3 returns this header for all
   *          objects except for S3 Standard storage class objects.</p>
   */
  StorageClass?: StorageClass | string;
}

export namespace ListObjectVersionsOutput {
  export const filterSensitiveLog = (obj: ListObjectVersionsOutput): any => ({
    ...obj,
  });
}

export interface ListObjectVersionsRequest {
  /**
   * <p>The bucket name that contains the objects. </p>
   */
  Bucket: string | undefined;

  /**
   * <p>A delimiter is a character that you specify to group keys. All keys that contain the
   *          same string between the <code>prefix</code> and the first occurrence of the delimiter are
   *          grouped under a single result element in CommonPrefixes. These groups are counted as one
   *          result against the max-keys limitation. These keys are not returned elsewhere in the
   *          response.</p>
   */
  Delimiter?: string;

  /**
   * <p>Requests Amazon S3 to encode the object keys in the response and specifies the encoding
   *          method to use. An object key may contain any Unicode character; however, XML 1.0 parser
   *          cannot parse some characters, such as characters with an ASCII value from 0 to 10. For
   *          characters that are not supported in XML 1.0, you can add this parameter to request that
   *          Amazon S3 encode the keys in the response.</p>
   */
  EncodingType?: EncodingType | string;

  /**
   * <p>Specifies the key to start with when listing objects in a bucket.</p>
   */
  KeyMarker?: string;

  /**
   * <p>Sets the maximum number of keys returned in the response. By default the API returns up
   *          to 1,000 key names. The response might contain fewer keys but will never contain more. If
   *          additional keys satisfy the search criteria, but were not returned because max-keys was
   *          exceeded, the response contains <isTruncated>true</isTruncated>. To return the
   *          additional keys, see key-marker and version-id-marker.</p>
   */
  MaxKeys?: number;

  /**
   * <p>Use this parameter to select only those keys that begin with the specified prefix. You
   *          can use prefixes to separate a bucket into different groupings of keys. (You can think of
   *          using prefix to make groups in the same way you'd use a folder in a file system.) You can
   *          use prefix with delimiter to roll up numerous objects into a single result under
   *          CommonPrefixes. </p>
   */
  Prefix?: string;

  /**
   * <p>Specifies the object version you want to start listing from.</p>
   */
  VersionIdMarker?: string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * <p>List Object markers in first level.</p>
   */
  DeletedObjects?: boolean;
}

export namespace ListObjectVersionsRequest {
  export const filterSensitiveLog = (obj: ListObjectVersionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Container for elements related to a part.</p>
 */
export interface Part {
  /**
   * <p>Part number identifying the part. This is a positive integer between 1 and
   *          10,000.</p>
   */
  PartNumber?: number;

  /**
   * <p>Date and time at which the part was uploaded.</p>
   */
  LastModified?: Date;

  /**
   * <p>Entity tag returned when the part was uploaded.</p>
   */
  ETag?: string;

  /**
   * <p>Size in bytes of the uploaded part data.</p>
   */
  Size?: number;
}

export namespace Part {
  export const filterSensitiveLog = (obj: Part): any => ({
    ...obj,
  });
}

export interface ListPartsOutput {
  /**
   * <p>If the bucket has a lifecycle rule configured with an action to abort incomplete
   *          multipart uploads and the prefix in the lifecycle rule matches the object name in the
   *          request, then the response includes this header indicating when the initiated multipart
   *          upload will become eligible for abort operation. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/mpuoverview.html#mpu-abort-incomplete-mpu-lifecycle-config">Aborting
   *             Incomplete Multipart Uploads Using a Bucket Lifecycle Policy</a>.</p>
   *
   *          <p>The response will also include the <code>x-amz-abort-rule-id</code> header that will
   *          provide the ID of the lifecycle configuration rule that defines this action.</p>
   */
  AbortDate?: Date;

  /**
   * <p>This header is returned along with the <code>x-amz-abort-date</code> header. It
   *          identifies applicable lifecycle configuration rule that defines the action to abort
   *          incomplete multipart uploads.</p>
   */
  AbortRuleId?: string;

  /**
   * <p>The name of the bucket to which the multipart upload was initiated.</p>
   */
  Bucket?: string;

  /**
   * <p>Object key for which the multipart upload was initiated.</p>
   */
  Key?: string;

  /**
   * <p>Upload ID identifying the multipart upload whose parts are being listed.</p>
   */
  UploadId?: string;

  /**
   * <p>When a list is truncated, this element specifies the last part in the list, as well as
   *          the value to use for the part-number-marker request parameter in a subsequent
   *          request.</p>
   */
  PartNumberMarker?: string;

  /**
   * <p>When a list is truncated, this element specifies the last part in the list, as well as
   *          the value to use for the part-number-marker request parameter in a subsequent
   *          request.</p>
   */
  NextPartNumberMarker?: string;

  /**
   * <p>Maximum number of parts that were allowed in the response.</p>
   */
  MaxParts?: number;

  /**
   * <p> Indicates whether the returned list of parts is truncated. A true value indicates that
   *          the list was truncated. A list can be truncated if the number of parts exceeds the limit
   *          returned in the MaxParts element.</p>
   */
  IsTruncated?: boolean;

  /**
   * <p> Container for elements related to a particular part. A response can contain zero or
   *          more <code>Part</code> elements.</p>
   */
  Parts?: Part[];

  /**
   * <p>Container element that identifies who initiated the multipart upload. If the initiator
   *          is an AWS account, this element provides the same information as the <code>Owner</code>
   *          element. If the initiator is an IAM User, this element provides the user ARN and display
   *          name.</p>
   */
  Initiator?: Initiator;

  /**
   * <p> Container element that identifies the object owner, after the object is created. If
   *          multipart upload is initiated by an IAM user, this element provides the parent account ID
   *          and display name.</p>
   */
  Owner?: Owner;

  /**
   * <p>Class of storage (STANDARD or REDUCED_REDUNDANCY) used to store the uploaded
   *          object.</p>
   */
  StorageClass?: StorageClass | string;

  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace ListPartsOutput {
  export const filterSensitiveLog = (obj: ListPartsOutput): any => ({
    ...obj,
  });
}

export interface ListPartsRequest {
  /**
   * <p>The name of the bucket to which the parts are being uploaded. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Object key for which the multipart upload was initiated.</p>
   */
  Key: string | undefined;

  /**
   * <p>Sets the maximum number of parts to return.</p>
   */
  MaxParts?: number;

  /**
   * <p>Specifies the part after which listing should begin. Only parts with higher part numbers
   *          will be listed.</p>
   */
  PartNumberMarker?: string;

  /**
   * <p>Upload ID identifying the multipart upload whose parts are being listed.</p>
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

export namespace ListPartsRequest {
  export const filterSensitiveLog = (obj: ListPartsRequest): any => ({
    ...obj,
  });
}

export interface PutBucketAccelerateConfigurationRequest {
  /**
   * <p>The name of the bucket for which the accelerate configuration is set.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Container for setting the transfer acceleration state.</p>
   */
  AccelerateConfiguration: AccelerateConfiguration | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketAccelerateConfigurationRequest {
  export const filterSensitiveLog = (obj: PutBucketAccelerateConfigurationRequest): any => ({
    ...obj,
  });
}

export interface PutBucketAclRequest {
  /**
   * <p>The canned ACL to apply to the bucket.</p>
   */
  ACL?: BucketCannedACL | string;

  /**
   * <p>Contains the elements that set the ACL permissions for an object per grantee.</p>
   */
  AccessControlPolicy?: AccessControlPolicy;

  /**
   * <p>The bucket to which to apply the ACL.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The base64-encoded 128-bit MD5 digest of the data. This header must be used as a message
   *          integrity check to verify that the request body was not corrupted in transit. For more
   *          information, go to <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC
   *          1864.</a>
   *          </p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>Allows grantee the read, write, read ACP, and write ACP permissions on the
   *          bucket.</p>
   */
  GrantFullControlDelivered?: string;

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
   * <p>Allows grantee to list the objects in the bucket.</p>
   */
  GrantReadDelivered?: string;

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
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketAclRequest {
  export const filterSensitiveLog = (obj: PutBucketAclRequest): any => ({
    ...obj,
  });
}

export interface PutBucketAnalyticsConfigurationRequest {
  /**
   * <p>The name of the bucket to which an analytics configuration is stored.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The ID that identifies the analytics configuration.</p>
   */
  Id: string | undefined;

  /**
   * <p>The configuration and any analyses for the analytics filter.</p>
   */
  AnalyticsConfiguration: AnalyticsConfiguration | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketAnalyticsConfigurationRequest {
  export const filterSensitiveLog = (obj: PutBucketAnalyticsConfigurationRequest): any => ({
    ...obj,
    ...(obj.AnalyticsConfiguration && {
      AnalyticsConfiguration: AnalyticsConfiguration.filterSensitiveLog(obj.AnalyticsConfiguration),
    }),
  });
}

export interface PutBucketCorsRequest {
  /**
   * <p>Specifies the bucket impacted by the <code>cors</code>configuration.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Describes the cross-origin access configuration for objects in an Amazon S3 bucket. For more
   *          information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html">Enabling Cross-Origin Resource
   *             Sharing</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  CORSConfiguration: CORSConfiguration | undefined;

  /**
   * <p>The base64-encoded 128-bit MD5 digest of the data. This header must be used as a message
   *          integrity check to verify that the request body was not corrupted in transit. For more
   *          information, go to <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC
   *          1864.</a>
   *          </p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketCorsRequest {
  export const filterSensitiveLog = (obj: PutBucketCorsRequest): any => ({
    ...obj,
  });
}

export interface PutBucketEncryptionRequest {
  /**
   * <p>Specifies default encryption for a bucket using server-side encryption with Amazon S3-managed
   *          keys (SSE-S3) or customer master keys stored in AWS KMS (SSE-KMS). For information about
   *          the Amazon S3 default encryption feature, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html">Amazon S3 Default Bucket Encryption</a>
   *          in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The base64-encoded 128-bit MD5 digest of the server-side encryption configuration.</p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>Specifies the default server-side-encryption configuration.</p>
   */
  ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketEncryptionRequest {
  export const filterSensitiveLog = (obj: PutBucketEncryptionRequest): any => ({
    ...obj,
    ...(obj.ServerSideEncryptionConfiguration && {
      ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration.filterSensitiveLog(
        obj.ServerSideEncryptionConfiguration
      ),
    }),
  });
}

export interface PutBucketIntelligentTieringConfigurationRequest {
  /**
   * <p>The name of the Amazon S3 bucket whose configuration you want to modify or retrieve.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The ID used to identify the S3 Intelligent-Tiering configuration.</p>
   */
  Id: string | undefined;

  /**
   * <p>Container for S3 Intelligent-Tiering configuration.</p>
   */
  IntelligentTieringConfiguration: IntelligentTieringConfiguration | undefined;
}

export namespace PutBucketIntelligentTieringConfigurationRequest {
  export const filterSensitiveLog = (obj: PutBucketIntelligentTieringConfigurationRequest): any => ({
    ...obj,
  });
}

export interface PutBucketInventoryConfigurationRequest {
  /**
   * <p>The name of the bucket where the inventory configuration will be stored.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The ID used to identify the inventory configuration.</p>
   */
  Id: string | undefined;

  /**
   * <p>Specifies the inventory configuration.</p>
   */
  InventoryConfiguration: InventoryConfiguration | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketInventoryConfigurationRequest {
  export const filterSensitiveLog = (obj: PutBucketInventoryConfigurationRequest): any => ({
    ...obj,
    ...(obj.InventoryConfiguration && {
      InventoryConfiguration: InventoryConfiguration.filterSensitiveLog(obj.InventoryConfiguration),
    }),
  });
}

export interface PutBucketLifecycleConfigurationRequest {
  /**
   * <p>The name of the bucket for which to set the configuration.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Container for lifecycle rules. You can add as many as 1,000 rules.</p>
   */
  LifecycleConfiguration?: BucketLifecycleConfiguration;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketLifecycleConfigurationRequest {
  export const filterSensitiveLog = (obj: PutBucketLifecycleConfigurationRequest): any => ({
    ...obj,
    ...(obj.LifecycleConfiguration && {
      LifecycleConfiguration: BucketLifecycleConfiguration.filterSensitiveLog(obj.LifecycleConfiguration),
    }),
  });
}

/**
 * <p>Container for logging status information.</p>
 */
export interface BucketLoggingStatus {
  /**
   * <p>Describes where logs are stored and the prefix that Amazon S3 assigns to all log object keys
   *          for a bucket. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTlogging.html">PUT Bucket logging</a> in the
   *             <i>Amazon Simple Storage Service API Reference</i>.</p>
   */
  LoggingEnabled?: LoggingEnabled;
}

export namespace BucketLoggingStatus {
  export const filterSensitiveLog = (obj: BucketLoggingStatus): any => ({
    ...obj,
  });
}

export interface PutBucketLoggingRequest {
  /**
   * <p>The name of the bucket for which to set the logging parameters.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Container for logging status information.</p>
   */
  BucketLoggingStatus: BucketLoggingStatus | undefined;

  /**
   * <p>The MD5 hash of the <code>PutBucketLogging</code> request body.</p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketLoggingRequest {
  export const filterSensitiveLog = (obj: PutBucketLoggingRequest): any => ({
    ...obj,
  });
}

export enum MetadataDirective2 {
  REPLACE = "REPLACE",
  REPLACE_NEW = "REPLACE_NEW",
}

export interface PutBucketMetadataRequest {
  /**
   * <p>Name of the bucket to which the multipart upload was initiated.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * <p>元数据操作指示符。取值为 REPLACE_NEW 或 REPLACE。
   *  REPLACE_NEW 表示:对于已经存在值 的元数据进行替换，不存在值的元数据 进行赋值，未指定的元数据保持不变。
   *  REPLACE 表示:若请求中携带的 x-amz-meta-头域，将会删除指定的自定义元数据，未指定 x-amz-meta-头域 将会删除全部的自定义元数据。
   *  类型:字符串</p>
   */
  MetadataDirective?: MetadataDirective2 | string;

  /**
   * <p>A map of metadata to store with the object in S3.</p>
   */
  Metadata?: { [key: string]: string };
}

export namespace PutBucketMetadataRequest {
  export const filterSensitiveLog = (obj: PutBucketMetadataRequest): any => ({
    ...obj,
  });
}

export interface PutBucketMetricsConfigurationRequest {
  /**
   * <p>The name of the bucket for which the metrics configuration is set.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The ID used to identify the metrics configuration.</p>
   */
  Id: string | undefined;

  /**
   * <p>Specifies the metrics configuration.</p>
   */
  MetricsConfiguration: MetricsConfiguration | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketMetricsConfigurationRequest {
  export const filterSensitiveLog = (obj: PutBucketMetricsConfigurationRequest): any => ({
    ...obj,
    ...(obj.MetricsConfiguration && {
      MetricsConfiguration: MetricsConfiguration.filterSensitiveLog(obj.MetricsConfiguration),
    }),
  });
}

export interface PutBucketNotificationConfigurationRequest {
  /**
   * <p>The name of the bucket.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>A container for specifying the notification configuration of the bucket. If this element
   *          is empty, notifications are turned off for the bucket.</p>
   */
  NotificationConfiguration: NotificationConfiguration | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketNotificationConfigurationRequest {
  export const filterSensitiveLog = (obj: PutBucketNotificationConfigurationRequest): any => ({
    ...obj,
  });
}

export interface PutBucketOwnershipControlsRequest {
  /**
   * <p>The name of the Amazon S3 bucket whose <code>OwnershipControls</code> you want to set.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The MD5 hash of the <code>OwnershipControls</code> request body. </p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * <p>The <code>OwnershipControls</code> (BucketOwnerPreferred or ObjectWriter) that you want
   *          to apply to this Amazon S3 bucket.</p>
   */
  OwnershipControls: OwnershipControls | undefined;
}

export namespace PutBucketOwnershipControlsRequest {
  export const filterSensitiveLog = (obj: PutBucketOwnershipControlsRequest): any => ({
    ...obj,
  });
}

export interface PutBucketPolicyRequest {
  /**
   * <p>The name of the bucket.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The MD5 hash of the request body.</p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>Set this parameter to true to confirm that you want to remove your permissions to change
   *          this bucket policy in the future.</p>
   */
  ConfirmRemoveSelfBucketAccess?: boolean;

  /**
   * <p>The bucket policy as a JSON document.</p>
   */
  Policy: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketPolicyRequest {
  export const filterSensitiveLog = (obj: PutBucketPolicyRequest): any => ({
    ...obj,
  });
}

export interface PutBucketQoSRequest {
  /**
   * <p>The name of the bucket from which an analytics configuration is deleted.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The <code>GetBucketQuota</code> of bucket.</p>
   */
  QoSConfiguration?: QoSConfiguration;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketQoSRequest {
  export const filterSensitiveLog = (obj: PutBucketQoSRequest): any => ({
    ...obj,
  });
}

export interface PutBucketQuotaRequest {
  /**
   * <p>The name of the bucket.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The <code>GetBucketQuota</code> of bucket.</p>
   */
  Quota?: Quota;
}

export namespace PutBucketQuotaRequest {
  export const filterSensitiveLog = (obj: PutBucketQuotaRequest): any => ({
    ...obj,
  });
}

export interface PutBucketRedundancyRequest {
  /**
   * <p>The bucket to which to apply the redundancy.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The canned redundancy to apply to the bucket.</p>
   */
  Redundancy?: string;
}

export namespace PutBucketRedundancyRequest {
  export const filterSensitiveLog = (obj: PutBucketRedundancyRequest): any => ({
    ...obj,
  });
}

export interface PutBucketReplicationRequest {
  /**
   * <p>The name of the bucket</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message
   *          integrity check to verify that the request body was not corrupted in transit. For more
   *          information, see <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC 1864</a>.</p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>A container for replication rules. You can add up to 1,000 rules. The maximum size of a
   *          replication configuration is 2 MB.</p>
   */
  ReplicationConfiguration: ReplicationConfiguration | undefined;

  /**
   * <p>A token to allow Object Lock to be enabled for an existing bucket.</p>
   */
  Token?: string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketReplicationRequest {
  export const filterSensitiveLog = (obj: PutBucketReplicationRequest): any => ({
    ...obj,
    ...(obj.ReplicationConfiguration && {
      ReplicationConfiguration: ReplicationConfiguration.filterSensitiveLog(obj.ReplicationConfiguration),
    }),
  });
}

/**
 * <p>Container for Payer.</p>
 */
export interface RequestPaymentConfiguration {
  /**
   * <p>Specifies who pays for the download and request fees.</p>
   */
  Payer: Payer | string | undefined;
}

export namespace RequestPaymentConfiguration {
  export const filterSensitiveLog = (obj: RequestPaymentConfiguration): any => ({
    ...obj,
  });
}

export interface PutBucketRequestPaymentRequest {
  /**
   * <p>The bucket name.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>>The base64-encoded 128-bit MD5 digest of the data. You must use this header as a
   *          message integrity check to verify that the request body was not corrupted in transit. For
   *          more information, see <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC
   *          1864</a>.</p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>Container for Payer.</p>
   */
  RequestPaymentConfiguration: RequestPaymentConfiguration | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketRequestPaymentRequest {
  export const filterSensitiveLog = (obj: PutBucketRequestPaymentRequest): any => ({
    ...obj,
  });
}

export interface PutBucketStorageClassRequest {
  /**
   * <p>The name of the bucket from which an analytics configuration is deleted.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The storage-class for the bucket.</p>
   */
  StorageClass?: StorageClass | string;
}

export namespace PutBucketStorageClassRequest {
  export const filterSensitiveLog = (obj: PutBucketStorageClassRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Container for <code>TagSet</code> elements.</p>
 */
export interface Tagging {
  /**
   * <p>A collection for a set of tags</p>
   */
  TagSet: Tag[] | undefined;
}

export namespace Tagging {
  export const filterSensitiveLog = (obj: Tagging): any => ({
    ...obj,
  });
}

export interface PutBucketTaggingRequest {
  /**
   * <p>The bucket name.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message
   *          integrity check to verify that the request body was not corrupted in transit. For more
   *          information, see <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC 1864</a>.</p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>Container for the <code>TagSet</code> and <code>Tag</code> elements.</p>
   */
  Tagging: Tagging | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketTaggingRequest {
  export const filterSensitiveLog = (obj: PutBucketTaggingRequest): any => ({
    ...obj,
  });
}

export interface PutBucketVersioningRequest {
  /**
   * <p>The bucket name.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>>The base64-encoded 128-bit MD5 digest of the data. You must use this header as a
   *          message integrity check to verify that the request body was not corrupted in transit. For
   *          more information, see <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC
   *          1864</a>.</p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>The concatenation of the authentication device's serial number, a space, and the value
   *          that is displayed on your authentication device.</p>
   */
  MFA?: string;

  /**
   * <p>Container for setting the versioning state.</p>
   */
  VersioningConfiguration: VersioningConfiguration | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketVersioningRequest {
  export const filterSensitiveLog = (obj: PutBucketVersioningRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies website configuration parameters for an Amazon S3 bucket.</p>
 */
export interface WebsiteConfiguration {
  /**
   * <p>The name of the error document for the website.</p>
   */
  ErrorDocument?: ErrorDocument;

  /**
   * <p>The name of the index document for the website.</p>
   */
  IndexDocument?: IndexDocument;

  /**
   * <p>The redirect behavior for every request to this bucket's website endpoint.</p>
   *          <important>
   *             <p>If you specify this property, you can't specify any other property.</p>
   *          </important>
   */
  RedirectAllRequestsTo?: RedirectAllRequestsTo;

  /**
   * <p>Rules that define when a redirect is applied and the redirect behavior.</p>
   */
  RoutingRules?: RoutingRule[];
}

export namespace WebsiteConfiguration {
  export const filterSensitiveLog = (obj: WebsiteConfiguration): any => ({
    ...obj,
  });
}

export interface PutBucketWebsiteRequest {
  /**
   * <p>The bucket name.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The base64-encoded 128-bit MD5 digest of the data. You must use this header as a message
   *          integrity check to verify that the request body was not corrupted in transit. For more
   *          information, see <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC 1864</a>.</p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>Container for the request.</p>
   */
  WebsiteConfiguration: WebsiteConfiguration | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutBucketWebsiteRequest {
  export const filterSensitiveLog = (obj: PutBucketWebsiteRequest): any => ({
    ...obj,
  });
}

export interface PutObjectOutput {
  /**
   * <p> If the expiration is configured for the object (see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutBucketLifecycleConfiguration.html">PutBucketLifecycleConfiguration</a>), the response includes this header. It
   *          includes the expiry-date and rule-id key-value pairs that provide information about object
   *          expiration. The value of the rule-id is URL encoded.</p>
   */
  Expiration?: string;

  /**
   * <p>Entity tag for the uploaded object.</p>
   */
  ETag?: string;

  /**
   * <p>If you specified server-side encryption either with an AWS KMS customer master key (CMK)
   *          or Amazon S3-managed encryption key in your PUT request, the response includes this header. It
   *          confirms the encryption algorithm that Amazon S3 used to encrypt the object.</p>
   */
  ServerSideEncryption?: ServerSideEncryption | string;

  /**
   * <p>Version of the object.</p>
   */
  VersionId?: string;

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
   * <p>If <code>x-amz-server-side-encryption</code> is present and has the value of
   *             <code>aws:kms</code>, this header specifies the ID of the AWS Key Management Service
   *          (AWS KMS) symmetric customer managed customer master key (CMK) that was used for the
   *          object. </p>
   */
  SSEKMSKeyId?: string;

  /**
   * <p>If present, specifies the AWS KMS Encryption Context to use for object encryption. The
   *          value of this header is a base64-encoded UTF-8 string holding JSON with the encryption
   *          context key-value pairs.</p>
   */
  SSEKMSEncryptionContext?: string;

  /**
   * <p>Indicates whether the uploaded object uses an S3 Bucket Key for server-side encryption with AWS KMS (SSE-KMS).</p>
   */
  BucketKeyEnabled?: boolean;

  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace PutObjectOutput {
  export const filterSensitiveLog = (obj: PutObjectOutput): any => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
    ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }),
  });
}

export interface PutObjectRequest {
  /**
   * <p>The canned ACL to apply to the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#CannedACL">Canned
   *       ACL</a>.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  ACL?: ObjectCannedACL | string;

  /**
   * <p>Object data.</p>
   */
  Body?: Readable | ReadableStream | Blob;

  /**
   * <p>The bucket name to which the PUT operation was initiated. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p> Can be used to specify caching behavior along the request/reply chain. For more
   *          information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9">http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9</a>.</p>
   */
  CacheControl?: string;

  /**
   * <p>Specifies presentational information for the object. For more information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec19.html#sec19.5.1">http://www.w3.org/Protocols/rfc2616/rfc2616-sec19.html#sec19.5.1</a>.</p>
   */
  ContentDisposition?: string;

  /**
   * <p>Specifies what content encodings have been applied to the object and thus what decoding
   *          mechanisms must be applied to obtain the media-type referenced by the Content-Type header
   *          field. For more information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.11">http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.11</a>.</p>
   */
  ContentEncoding?: string;

  /**
   * <p>The language the content is in.</p>
   */
  ContentLanguage?: string;

  /**
   * <p>Size of the body in bytes. This parameter is useful when the size of the body cannot be
   *          determined automatically. For more information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.13">http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.13</a>.</p>
   */
  ContentLength?: number;

  /**
   * <p>The base64-encoded 128-bit MD5 digest of the message (without the headers) according to
   *          RFC 1864. This header can be used as a message integrity check to verify that the data is
   *          the same data that was originally sent. Although it is optional, we recommend using the
   *          Content-MD5 mechanism as an end-to-end integrity check. For more information about REST
   *          request authentication, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/RESTAuthentication.html">REST
   *             Authentication</a>.</p>
   */
  ContentMD5?: string;

  /**
   * <p>A standard MIME type describing the format of the contents. For more information, see
   *             <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17">http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17</a>.</p>
   */
  ContentType?: string;

  /**
   * <p>The date and time at which the object is no longer cacheable. For more information, see
   *             <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.21">http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.21</a>.</p>
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
   * <p>Object key for which the PUT operation was initiated.</p>
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
   * <p>If the bucket is configured as a website, redirects requests for this object to another
   *          object in the same bucket or to an external URL. Amazon S3 stores the value of this header in
   *          the object metadata. For information about object metadata, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingMetadata.html">Object Key and Metadata</a>.</p>
   *
   *          <p>In the following example, the request header sets the redirect to an object
   *          (anotherPage.html) in the same bucket:</p>
   *
   *          <p>
   *             <code>x-amz-website-redirect-location: /anotherPage.html</code>
   *          </p>
   *
   *          <p>In the following example, the request header sets the object redirect to another
   *          website:</p>
   *
   *          <p>
   *             <code>x-amz-website-redirect-location: http://www.example.com/</code>
   *          </p>
   *
   *          <p>For more information about website hosting in Amazon S3, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html">Hosting Websites on Amazon S3</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/how-to-page-redirect.html">How to Configure Website Page
   *             Redirects</a>. </p>
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
   * <p>If <code>x-amz-server-side-encryption</code> is present and has the value of
   *             <code>aws:kms</code>, this header specifies the ID of the AWS Key Management Service
   *          (AWS KMS) symmetrical customer managed customer master key (CMK) that was used for the
   *          object.</p>
   *          <p> If the value of <code>x-amz-server-side-encryption</code> is <code>aws:kms</code>, this
   *          header specifies the ID of the symmetric customer managed AWS KMS CMK that will be used for
   *          the object. If you specify <code>x-amz-server-side-encryption:aws:kms</code>, but do not
   *             provide<code> x-amz-server-side-encryption-aws-kms-key-id</code>, Amazon S3 uses the AWS
   *          managed CMK in AWS to protect the data.</p>
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
   *          <p>Specifying this header with a PUT operation doesn’t affect bucket-level settings for S3 Bucket Key.</p>
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
   * <p>The tag-set for the object. The tag-set must be encoded as URL Query parameters. (For
   *          example, "Key1=Value1")</p>
   */
  Tagging?: string;

  /**
   * <p>The Object Lock mode that you want to apply to this object.</p>
   */
  ObjectLockMode?: ObjectLockMode | string;

  /**
   * <p>The date and time when you want this object's Object Lock to expire.</p>
   */
  ObjectLockRetainUntilDate?: Date;

  /**
   * <p>The date and time when you want this object's WORM to expire. Must be formatted
   *          as a timestamp parameter.</p>
   */
  WormRetainUntilDate?: Date;

  /**
   * <p>Specifies whether a legal hold will be applied to this object. For more information
   *          about S3 Object Lock, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html">Object
   *          Lock</a>.</p>
   */
  ObjectLockLegalHoldStatus?: ObjectLockLegalHoldStatus | string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * <p>Indicates whether this action should bypass Governance-mode restrictions.</p>
   */
  BypassRetentionTimeLimit?: boolean;
}

export namespace PutObjectRequest {
  export const filterSensitiveLog = (obj: PutObjectRequest): any => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
    ...(obj.SSEKMSEncryptionContext && { SSEKMSEncryptionContext: SENSITIVE_STRING }),
  });
}

export interface PutObjectAclOutput {
  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace PutObjectAclOutput {
  export const filterSensitiveLog = (obj: PutObjectAclOutput): any => ({
    ...obj,
  });
}

export interface PutObjectAclRequest {
  /**
   * <p>The canned ACL to apply to the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#CannedACL">Canned ACL</a>.</p>
   */
  ACL?: ObjectCannedACL | string;

  /**
   * <p>Contains the elements that set the ACL permissions for an object per grantee.</p>
   */
  AccessControlPolicy?: AccessControlPolicy;

  /**
   * <p>The bucket name that contains the object to which you want to attach the ACL. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The base64-encoded 128-bit MD5 digest of the data. This header must be used as a message
   *          integrity check to verify that the request body was not corrupted in transit. For more
   *          information, go to <a href="http://www.ietf.org/rfc/rfc1864.txt">RFC
   *          1864.></a>
   *          </p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>Allows grantee the read, write, read ACP, and write ACP permissions on the
   *          bucket.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantFullControl?: string;

  /**
   * <p>Allows grantee to list the objects in the
   *       bucket.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantRead?: string;

  /**
   * <p>Allows grantee to read the bucket ACL.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantReadACP?: string;

  /**
   * <p>Allows grantee to create, overwrite, and delete any object in the bucket.</p>
   */
  GrantWrite?: string;

  /**
   * <p>Allows grantee to write the ACL for the applicable
   *       bucket.</p>
   *          <p>This action is not supported by Amazon S3 on Outposts.</p>
   */
  GrantWriteACP?: string;

  /**
   * <p>Key for which the PUT operation was initiated.</p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Key: string | undefined;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>VersionId used to reference a specific version of the object.</p>
   */
  VersionId?: string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutObjectAclRequest {
  export const filterSensitiveLog = (obj: PutObjectAclRequest): any => ({
    ...obj,
  });
}

export interface PutObjectLegalHoldOutput {
  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace PutObjectLegalHoldOutput {
  export const filterSensitiveLog = (obj: PutObjectLegalHoldOutput): any => ({
    ...obj,
  });
}

export interface PutObjectLegalHoldRequest {
  /**
   * <p>The bucket name containing the object that you want to place a Legal Hold on. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The key name for the object that you want to place a Legal Hold on.</p>
   */
  Key: string | undefined;

  /**
   * <p>Container element for the Legal Hold configuration you want to apply to the specified
   *          object.</p>
   */
  LegalHold?: ObjectLockLegalHold;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>The version ID of the object that you want to place a Legal Hold on.</p>
   */
  VersionId?: string;

  /**
   * <p>The MD5 hash for the request body.</p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutObjectLegalHoldRequest {
  export const filterSensitiveLog = (obj: PutObjectLegalHoldRequest): any => ({
    ...obj,
  });
}

export interface PutObjectLockConfigurationOutput {
  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace PutObjectLockConfigurationOutput {
  export const filterSensitiveLog = (obj: PutObjectLockConfigurationOutput): any => ({
    ...obj,
  });
}

export interface PutObjectLockConfigurationRequest {
  /**
   * <p>The bucket whose Object Lock configuration you want to create or replace.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The Object Lock configuration that you want to apply to the specified bucket.</p>
   */
  ObjectLockConfiguration?: ObjectLockConfiguration;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>A token to allow Object Lock to be enabled for an existing bucket.</p>
   */
  Token?: string;

  /**
   * <p>The MD5 hash for the request body.</p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutObjectLockConfigurationRequest {
  export const filterSensitiveLog = (obj: PutObjectLockConfigurationRequest): any => ({
    ...obj,
  });
}

export interface PutObjectMetadataRequest {
  /**
   * <p>Name of the bucket to which the multipart upload was initiated.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * <p>Version ID of an object.</p>
   */
  VersionId?: string;

  /**
   * <p>Object key for which the multipart upload was initiated.</p>
   */
  Key: string | undefined;

  /**
   * <p>元数据操作指示符。取值为 REPLACE_NEW 或 REPLACE。 REPLACE_NEW 表示:对于已经存在值 的元数据进行替换，不存在值的元数据 进行赋值，未指定的元数据保持不变。 REPLACE 表示:若请求中携带的 x-amz-meta-头域，将会删除指定的自定义元数据，未指定 x-amz-meta-头域 将会删除全部的自定义元数据。 类型:字符串</p>
   */
  MetadataDirective?: MetadataDirective2 | string;

  /**
   * <p>A map of metadata to store with the object in S3.</p>
   */
  Metadata?: { [key: string]: string };

  /**
   * <p>A standard MIME type describing the format of the object data.</p>
   */
  ContentType?: string;

  /**
   * <p>Specifies presentational information for the object.</p>
   */
  ContentDisposition?: string;

  /**
   * <p>The language the content is in.</p>
   */
  ContentLanguage?: string;

  /**
   * <p>If the bucket is configured as a website, redirects requests for this object to another
   *          object in the same bucket or to an external URL. Amazon S3 stores the value of this header in
   *          the object metadata.</p>
   */
  WebsiteRedirectLocation?: string;

  /**
   * <p>Specifies caching behavior along the request/reply chain.</p>
   */
  CacheControl?: string;

  /**
   * <p>Specifies what content encodings have been applied to the object and thus what decoding
   *          mechanisms must be applied to obtain the media-type referenced by the Content-Type header
   *          field.</p>
   */
  ContentEncoding?: string;

  /**
   * <p>The date and time at which the object is no longer cacheable.</p>
   */
  Expires?: Date;
}

export namespace PutObjectMetadataRequest {
  export const filterSensitiveLog = (obj: PutObjectMetadataRequest): any => ({
    ...obj,
  });
}

export interface PutObjectRetentionOutput {
  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace PutObjectRetentionOutput {
  export const filterSensitiveLog = (obj: PutObjectRetentionOutput): any => ({
    ...obj,
  });
}

export interface PutObjectRetentionRequest {
  /**
   * <p>The bucket name that contains the object you want to apply this Object Retention
   *          configuration to. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The key name for the object that you want to apply this Object Retention configuration
   *          to.</p>
   */
  Key: string | undefined;

  /**
   * <p>The container element for the Object Retention configuration.</p>
   */
  Retention?: ObjectLockRetention;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>The version ID for the object that you want to apply this Object Retention configuration
   *          to.</p>
   */
  VersionId?: string;

  /**
   * <p>Indicates whether this operation should bypass Governance-mode restrictions.</p>
   */
  BypassGovernanceRetention?: boolean;

  /**
   * <p>Indicates whether this action should bypass Governance-mode restrictions.</p>
   */
  BypassRetentionTimeLimit?: boolean;

  /**
   * <p>The MD5 hash for the request body.</p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutObjectRetentionRequest {
  export const filterSensitiveLog = (obj: PutObjectRetentionRequest): any => ({
    ...obj,
  });
}

export interface PutObjectTaggingOutput {
  /**
   * <p>The versionId of the object the tag-set was added to.</p>
   */
  VersionId?: string;
}

export namespace PutObjectTaggingOutput {
  export const filterSensitiveLog = (obj: PutObjectTaggingOutput): any => ({
    ...obj,
  });
}

export interface PutObjectTaggingRequest {
  /**
   * <p>The bucket name containing the object. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Name of the object key.</p>
   */
  Key: string | undefined;

  /**
   * <p>The versionId of the object that the tag-set will be added to.</p>
   */
  VersionId?: string;

  /**
   * <p>The MD5 hash for the request body.</p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>Container for the <code>TagSet</code> and <code>Tag</code> elements</p>
   */
  Tagging: Tagging | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutObjectTaggingRequest {
  export const filterSensitiveLog = (obj: PutObjectTaggingRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Object Storage Class Policy</p>
 */
export interface OSCPConfiguration {
  /**
   * <p>A lifecycle rule for individual objects in an Amazon S3 bucket.</p>
   */
  Policies: OSCPPolicy[] | undefined;
}

export namespace OSCPConfiguration {
  export const filterSensitiveLog = (obj: OSCPConfiguration): any => ({
    ...obj,
    ...(obj.Policies && { Policies: obj.Policies.map((item) => OSCPPolicy.filterSensitiveLog(item)) }),
  });
}

export interface PutOSCPConfigurationRequest {
  /**
   * <p>The name of the bucket for which to set the configuration.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * <p>Container for lifecycle rules. You can add as many as 1,000 rules.</p>
   */
  OSCPConfiguration?: OSCPConfiguration;
}

export namespace PutOSCPConfigurationRequest {
  export const filterSensitiveLog = (obj: PutOSCPConfigurationRequest): any => ({
    ...obj,
    ...(obj.OSCPConfiguration && { OSCPConfiguration: OSCPConfiguration.filterSensitiveLog(obj.OSCPConfiguration) }),
  });
}

export interface PutPublicAccessBlockRequest {
  /**
   * <p>The name of the Amazon S3 bucket whose <code>PublicAccessBlock</code> configuration you want
   *          to set.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The MD5 hash of the <code>PutPublicAccessBlock</code> request body. </p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>The <code>PublicAccessBlock</code> configuration that you want to apply to this Amazon S3
   *          bucket. You can enable the configuration options in any combination. For more information
   *          about when Amazon S3 considers a bucket or object public, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status">The Meaning of "Public"</a> in the <i>Amazon Simple Storage Service Developer
   *          Guide</i>.</p>
   */
  PublicAccessBlockConfiguration: PublicAccessBlockConfiguration | undefined;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace PutPublicAccessBlockRequest {
  export const filterSensitiveLog = (obj: PutPublicAccessBlockRequest): any => ({
    ...obj,
  });
}

export interface PutRefererRequest {
  /**
   * <p>The name of the bucket to create.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The configuration information for the bucket.</p>
   */
  RefererConfiguration?: RefererConfiguration;
}

export namespace PutRefererRequest {
  export const filterSensitiveLog = (obj: PutRefererRequest): any => ({
    ...obj,
  });
}

export interface PutWORMConfigurationOutput {
  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace PutWORMConfigurationOutput {
  export const filterSensitiveLog = (obj: PutWORMConfigurationOutput): any => ({
    ...obj,
  });
}

export interface PutWORMConfigurationRequest {
  /**
   * <p>The bucket whose WORM configuration you want to create or replace.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>A token to allow WORM to be enabled for an existing bucket.</p>
   */
  Token?: string;

  /**
   * <p>The MD5 hash for the request body.</p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * <p>The WORM configuration that you want to apply to the specified bucket.</p>
   */
  WORMConfiguration?: WORMConfiguration;
}

export namespace PutWORMConfigurationRequest {
  export const filterSensitiveLog = (obj: PutWORMConfigurationRequest): any => ({
    ...obj,
  });
}

export interface PutWORMRetainPeriodOutput {
  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace PutWORMRetainPeriodOutput {
  export const filterSensitiveLog = (obj: PutWORMRetainPeriodOutput): any => ({
    ...obj,
  });
}

export interface PutWORMRetainPeriodRequest {
  /**
   * <p>The bucket name containing the object that you want to place a Retain Period on. </p>
   *          <p>When using this action with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this action with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-access-points.html">Using access points</a> in the <i>Amazon S3 User Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The key name for the object that you want to place a Retain Period on.</p>
   */
  Key: string | undefined;

  /**
   * <p>Confirms that the requester knows that they will be charged for the request. Bucket
   *          owners need not specify this parameter in their requests. For information about downloading
   *          objects from requester pays buckets, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html">Downloading Objects in
   *             Requestor Pays Buckets</a> in the <i>Amazon S3 Developer Guide</i>.</p>
   */
  RequestPayer?: RequestPayer | string;

  /**
   * <p>The version ID of the object that you want to place a Retain Period on.</p>
   */
  VersionId?: string;

  /**
   * <p>The MD5 hash for the request body.</p>
   *          <p>For requests made using the AWS Command Line Interface (CLI) or AWS SDKs, this field is calculated automatically.</p>
   */
  ContentMD5?: string;

  /**
   * <p>The account ID of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * <p>Container element for the Retain Period configuration you want to apply to the specified
   *          object.</p>
   */
  RetainPeriod?: WORMRetainPeriod;
}

export namespace PutWORMRetainPeriodRequest {
  export const filterSensitiveLog = (obj: PutWORMRetainPeriodRequest): any => ({
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

export interface RestoreObjectOutput {
  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;

  /**
   * <p>Indicates the path in the provided S3 output location where Select results will be
   *          restored to.</p>
   */
  RestoreOutputPath?: string;
}

export namespace RestoreObjectOutput {
  export const filterSensitiveLog = (obj: RestoreObjectOutput): any => ({
    ...obj,
  });
}

export type Tier = "Bulk" | "Expedited" | "Standard";

/**
 * <p>Container for S3 Glacier job parameters.</p>
 */
export interface GlacierJobParameters {
  /**
   * <p>Retrieval tier at which the restore will be processed.</p>
   */
  Tier: Tier | string | undefined;
}

export namespace GlacierJobParameters {
  export const filterSensitiveLog = (obj: GlacierJobParameters): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the type of server-side encryption used.</p>
 */
export interface Encryption {
  /**
   * <p>The server-side encryption algorithm used when storing job results in Amazon S3 (for example,
   *          AES256, aws:kms).</p>
   */
  EncryptionType: ServerSideEncryption | string | undefined;

  /**
   * <p>If the encryption type is <code>aws:kms</code>, this optional value specifies the ID of
   *          the symmetric customer managed AWS KMS CMK to use for encryption of job results. Amazon S3 only
   *          supports symmetric CMKs. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/symmetric-asymmetric.html">Using Symmetric and
   *             Asymmetric Keys</a> in the <i>AWS Key Management Service Developer
   *             Guide</i>.</p>
   */
  KMSKeyId?: string;

  /**
   * <p>If the encryption type is <code>aws:kms</code>, this optional value can be used to
   *          specify the encryption context for the restore results.</p>
   */
  KMSContext?: string;
}

export namespace Encryption {
  export const filterSensitiveLog = (obj: Encryption): any => ({
    ...obj,
    ...(obj.KMSKeyId && { KMSKeyId: SENSITIVE_STRING }),
  });
}

/**
 * <p>A metadata key-value pair to store with an object.</p>
 */
export interface MetadataEntry {
  /**
   * <p>Name of the Object.</p>
   */
  Name?: string;

  /**
   * <p>Value of the Object.</p>
   */
  Value?: string;
}

export namespace MetadataEntry {
  export const filterSensitiveLog = (obj: MetadataEntry): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an Amazon S3 location that will receive the results of the restore request.</p>
 */
export interface S3Location {
  /**
   * <p>The name of the bucket where the restore results will be placed.</p>
   */
  BucketName: string | undefined;

  /**
   * <p>The prefix that is prepended to the restore results for this request.</p>
   */
  Prefix: string | undefined;

  /**
   * <p>Contains the type of server-side encryption used.</p>
   */
  Encryption?: Encryption;

  /**
   * <p>The canned ACL to apply to the restore results.</p>
   */
  CannedACL?: ObjectCannedACL | string;

  /**
   * <p>A list of grants that control access to the staged results.</p>
   */
  AccessControlList?: Grant[];

  /**
   * <p>The tag-set that is applied to the restore results.</p>
   */
  Tagging?: Tagging;

  /**
   * <p>A list of metadata to store with the restore results in S3.</p>
   */
  UserMetadata?: MetadataEntry[];

  /**
   * <p>The class of storage used to store the restore results.</p>
   */
  StorageClass?: StorageClass | string;
}

export namespace S3Location {
  export const filterSensitiveLog = (obj: S3Location): any => ({
    ...obj,
    ...(obj.Encryption && { Encryption: Encryption.filterSensitiveLog(obj.Encryption) }),
  });
}

/**
 * <p>Describes the location where the restore job's output is stored.</p>
 */
export interface OutputLocation {
  /**
   * <p>Describes an S3 location that will receive the results of the restore request.</p>
   */
  S3?: S3Location;
}

export namespace OutputLocation {
  export const filterSensitiveLog = (obj: OutputLocation): any => ({
    ...obj,
    ...(obj.S3 && { S3: S3Location.filterSensitiveLog(obj.S3) }),
  });
}

export type ExpressionType = "SQL";

export type CompressionType = "BZIP2" | "GZIP" | "NONE";

export enum FileHeaderInfo {
  IGNORE = "IGNORE",
  NONE = "NONE",
  USE = "USE",
}

/**
 * <p>Describes how an uncompressed comma-separated values (CSV)-formatted input object is
 *          formatted.</p>
 */
export interface CSVInput {
  /**
   * <p>Describes the first line of input. Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NONE</code>: First line is not a header.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IGNORE</code>: First line is a header, but you can't use the header values
   *                to indicate the column in an expression. You can use column position (such as _1, _2,
   *                …) to indicate the column (<code>SELECT s._1 FROM OBJECT s</code>).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Use</code>: First line is a header, and you can use the header value to
   *                identify a column in an expression (<code>SELECT "name" FROM OBJECT</code>). </p>
   *             </li>
   *          </ul>
   */
  FileHeaderInfo?: FileHeaderInfo | string;

  /**
   * <p>A single character used to indicate that a row should be ignored when the character is
   *          present at the start of that row. You can specify any character to indicate a comment
   *          line.</p>
   */
  Comments?: string;

  /**
   * <p>A single character used for escaping the quotation mark character inside an already
   *          escaped value. For example, the value """ a , b """ is parsed as " a , b ".</p>
   */
  QuoteEscapeCharacter?: string;

  /**
   * <p>A single character used to separate individual records in the input. Instead of the
   *          default value, you can specify an arbitrary delimiter.</p>
   */
  RecordDelimiter?: string;

  /**
   * <p>A single character used to separate individual fields in a record. You can specify an
   *          arbitrary delimiter.</p>
   */
  FieldDelimiter?: string;

  /**
   * <p>A single character used for escaping when the field delimiter is part of the value. For
   *          example, if the value is <code>a, b</code>, Amazon S3 wraps this field value in quotation marks,
   *          as follows: <code>" a , b "</code>.</p>
   *          <p>Type: String</p>
   *          <p>Default: <code>"</code>
   *          </p>
   *          <p>Ancestors: <code>CSV</code>
   *          </p>
   */
  QuoteCharacter?: string;

  /**
   * <p>Specifies that CSV field values may contain quoted record delimiters and such records
   *          should be allowed. Default value is FALSE. Setting this value to TRUE may lower
   *          performance.</p>
   */
  AllowQuotedRecordDelimiter?: boolean;
}

export namespace CSVInput {
  export const filterSensitiveLog = (obj: CSVInput): any => ({
    ...obj,
  });
}

export enum JSONType {
  DOCUMENT = "DOCUMENT",
  LINES = "LINES",
}

/**
 * <p>Specifies JSON as object's input serialization format.</p>
 */
export interface JSONInput {
  /**
   * <p>The type of JSON. Valid values: Document, Lines.</p>
   */
  Type?: JSONType | string;
}

export namespace JSONInput {
  export const filterSensitiveLog = (obj: JSONInput): any => ({
    ...obj,
  });
}

/**
 * <p>Container for Parquet.</p>
 */
export interface ParquetInput {}

export namespace ParquetInput {
  export const filterSensitiveLog = (obj: ParquetInput): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the serialization format of the object.</p>
 */
export interface InputSerialization {
  /**
   * <p>Describes the serialization of a CSV-encoded object.</p>
   */
  CSV?: CSVInput;

  /**
   * <p>Specifies object's compression format. Valid values: NONE, GZIP, BZIP2. Default Value:
   *          NONE.</p>
   */
  CompressionType?: CompressionType | string;

  /**
   * <p>Specifies JSON as object's input serialization format.</p>
   */
  JSON?: JSONInput;

  /**
   * <p>Specifies Parquet as object's input serialization format.</p>
   */
  Parquet?: ParquetInput;
}

export namespace InputSerialization {
  export const filterSensitiveLog = (obj: InputSerialization): any => ({
    ...obj,
  });
}

export enum QuoteFields {
  ALWAYS = "ALWAYS",
  ASNEEDED = "ASNEEDED",
}

/**
 * <p>Describes how uncompressed comma-separated values (CSV)-formatted results are
 *          formatted.</p>
 */
export interface CSVOutput {
  /**
   * <p>Indicates whether to use quotation marks around output fields. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALWAYS</code>: Always use quotation marks for output fields.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ASNEEDED</code>: Use quotation marks for output fields when needed.</p>
   *             </li>
   *          </ul>
   */
  QuoteFields?: QuoteFields | string;

  /**
   * <p>The single character used for escaping the quote character inside an already escaped
   *          value.</p>
   */
  QuoteEscapeCharacter?: string;

  /**
   * <p>A single character used to separate individual records in the output. Instead of the
   *          default value, you can specify an arbitrary delimiter.</p>
   */
  RecordDelimiter?: string;

  /**
   * <p>The value used to separate individual fields in a record. You can specify an arbitrary
   *          delimiter.</p>
   */
  FieldDelimiter?: string;

  /**
   * <p>A single character used for escaping when the field delimiter is part of the value. For
   *          example, if the value is <code>a, b</code>, Amazon S3 wraps this field value in quotation marks,
   *          as follows: <code>" a , b "</code>.</p>
   */
  QuoteCharacter?: string;
}

export namespace CSVOutput {
  export const filterSensitiveLog = (obj: CSVOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies JSON as request's output serialization format.</p>
 */
export interface JSONOutput {
  /**
   * <p>The value used to separate individual records in the output. If no value is specified,
   *          Amazon S3 uses a newline character ('\n').</p>
   */
  RecordDelimiter?: string;
}

export namespace JSONOutput {
  export const filterSensitiveLog = (obj: JSONOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Describes how results of the Select job are serialized.</p>
 */
export interface OutputSerialization {
  /**
   * <p>Describes the serialization of CSV-encoded Select results.</p>
   */
  CSV?: CSVOutput;

  /**
   * <p>Specifies JSON as request's output serialization format.</p>
   */
  JSON?: JSONOutput;
}

export namespace OutputSerialization {
  export const filterSensitiveLog = (obj: OutputSerialization): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the parameters for Select job types.</p>
 */
export interface SelectParameters {
  /**
   * <p>Describes the serialization format of the object.</p>
   */
  InputSerialization: InputSerialization | undefined;

  /**
   * <p>The type of the provided expression (for example, SQL).</p>
   */
  ExpressionType: ExpressionType | string | undefined;

  /**
   * <p>The expression that is used to query the object.</p>
   */
  Expression: string | undefined;

  /**
   * <p>Describes how the results of the Select job are serialized.</p>
   */
  OutputSerialization: OutputSerialization | undefined;
}

export namespace SelectParameters {
  export const filterSensitiveLog = (obj: SelectParameters): any => ({
    ...obj,
  });
}

export enum RestoreRequestType {
  SELECT = "SELECT",
}

/**
 * <p>Container for restore job parameters.</p>
 */
export interface RestoreRequest {
  /**
   * <p>Lifetime of the active copy in days. Do not use with restores that specify
   *             <code>OutputLocation</code>.</p>
   *          <p>The Days element is required for regular restores, and must not be provided for select
   *          requests.</p>
   */
  Days?: number;

  /**
   * <p>S3 Glacier related parameters pertaining to this job. Do not use with restores that
   *          specify <code>OutputLocation</code>.</p>
   */
  GlacierJobParameters?: GlacierJobParameters;

  /**
   * <p>Type of restore request.</p>
   */
  Type?: RestoreRequestType | string;

  /**
   * <p>Retrieval tier at which the restore will be processed.</p>
   */
  Tier?: Tier | string;

  /**
   * <p>The optional description for the job.</p>
   */
  Description?: string;

  /**
   * <p>Describes the parameters for Select job types.</p>
   */
  SelectParameters?: SelectParameters;

  /**
   * <p>Describes the location where the restore job's output is stored.</p>
   */
  OutputLocation?: OutputLocation;
}

export namespace RestoreRequest {
  export const filterSensitiveLog = (obj: RestoreRequest): any => ({
    ...obj,
    ...(obj.OutputLocation && { OutputLocation: OutputLocation.filterSensitiveLog(obj.OutputLocation) }),
  });
}

export interface RestoreObjectRequest {
  /**
   * <p>The bucket name containing the object to restore. </p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Object key for which the operation was initiated.</p>
   */
  Key: string | undefined;

  /**
   * <p>VersionId used to reference a specific version of the object.</p>
   */
  VersionId?: string;

  /**
   * <p>Container for restore job parameters.</p>
   */
  RestoreRequest?: RestoreRequest;

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

export namespace RestoreObjectRequest {
  export const filterSensitiveLog = (obj: RestoreObjectRequest): any => ({
    ...obj,
    ...(obj.RestoreRequest && { RestoreRequest: RestoreRequest.filterSensitiveLog(obj.RestoreRequest) }),
  });
}

/**
 * <p></p>
 */
export interface ContinuationEvent {}

export namespace ContinuationEvent {
  export const filterSensitiveLog = (obj: ContinuationEvent): any => ({
    ...obj,
  });
}

/**
 * <p>A message that indicates the request is complete and no more messages will be sent. You
 *          should not assume that the request is complete until the client receives an
 *             <code>EndEvent</code>.</p>
 */
export interface EndEvent {}

export namespace EndEvent {
  export const filterSensitiveLog = (obj: EndEvent): any => ({
    ...obj,
  });
}

/**
 * <p>This data type contains information about progress of an operation.</p>
 */
export interface Progress {
  /**
   * <p>The current number of object bytes scanned.</p>
   */
  BytesScanned?: number;

  /**
   * <p>The current number of uncompressed object bytes processed.</p>
   */
  BytesProcessed?: number;

  /**
   * <p>The current number of bytes of records payload data returned.</p>
   */
  BytesReturned?: number;
}

export namespace Progress {
  export const filterSensitiveLog = (obj: Progress): any => ({
    ...obj,
  });
}

/**
 * <p>This data type contains information about the progress event of an operation.</p>
 */
export interface ProgressEvent {
  /**
   * <p>The Progress event details.</p>
   */
  Details?: Progress;
}

export namespace ProgressEvent {
  export const filterSensitiveLog = (obj: ProgressEvent): any => ({
    ...obj,
  });
}

/**
 * <p>The container for the records event.</p>
 */
export interface RecordsEvent {
  /**
   * <p>The byte array of partial, one or more result records.</p>
   */
  Payload?: Uint8Array;
}

export namespace RecordsEvent {
  export const filterSensitiveLog = (obj: RecordsEvent): any => ({
    ...obj,
  });
}

/**
 * <p>Container for the stats details.</p>
 */
export interface Stats {
  /**
   * <p>The total number of object bytes scanned.</p>
   */
  BytesScanned?: number;

  /**
   * <p>The total number of uncompressed object bytes processed.</p>
   */
  BytesProcessed?: number;

  /**
   * <p>The total number of bytes of records payload data returned.</p>
   */
  BytesReturned?: number;
}

export namespace Stats {
  export const filterSensitiveLog = (obj: Stats): any => ({
    ...obj,
  });
}

/**
 * <p>Container for the Stats Event.</p>
 */
export interface StatsEvent {
  /**
   * <p>The Stats event details.</p>
   */
  Details?: Stats;
}

export namespace StatsEvent {
  export const filterSensitiveLog = (obj: StatsEvent): any => ({
    ...obj,
  });
}

/**
 * <p>The container for selecting objects from a content event stream.</p>
 */
export type SelectObjectContentEventStream =
  | SelectObjectContentEventStream.ContMember
  | SelectObjectContentEventStream.EndMember
  | SelectObjectContentEventStream.ProgressMember
  | SelectObjectContentEventStream.RecordsMember
  | SelectObjectContentEventStream.StatsMember
  | SelectObjectContentEventStream.$UnknownMember;

export namespace SelectObjectContentEventStream {
  /**
   * <p>The Records Event.</p>
   */
  export interface RecordsMember {
    Records: RecordsEvent;
    Stats?: never;
    Progress?: never;
    Cont?: never;
    End?: never;
    $unknown?: never;
  }

  /**
   * <p>The Stats Event.</p>
   */
  export interface StatsMember {
    Records?: never;
    Stats: StatsEvent;
    Progress?: never;
    Cont?: never;
    End?: never;
    $unknown?: never;
  }

  /**
   * <p>The Progress Event.</p>
   */
  export interface ProgressMember {
    Records?: never;
    Stats?: never;
    Progress: ProgressEvent;
    Cont?: never;
    End?: never;
    $unknown?: never;
  }

  /**
   * <p>The Continuation Event.</p>
   */
  export interface ContMember {
    Records?: never;
    Stats?: never;
    Progress?: never;
    Cont: ContinuationEvent;
    End?: never;
    $unknown?: never;
  }

  /**
   * <p>The End Event.</p>
   */
  export interface EndMember {
    Records?: never;
    Stats?: never;
    Progress?: never;
    Cont?: never;
    End: EndEvent;
    $unknown?: never;
  }

  export interface $UnknownMember {
    Records?: never;
    Stats?: never;
    Progress?: never;
    Cont?: never;
    End?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    Records: (value: RecordsEvent) => T;
    Stats: (value: StatsEvent) => T;
    Progress: (value: ProgressEvent) => T;
    Cont: (value: ContinuationEvent) => T;
    End: (value: EndEvent) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: SelectObjectContentEventStream, visitor: Visitor<T>): T => {
    if (value.Records !== undefined) return visitor.Records(value.Records);
    if (value.Stats !== undefined) return visitor.Stats(value.Stats);
    if (value.Progress !== undefined) return visitor.Progress(value.Progress);
    if (value.Cont !== undefined) return visitor.Cont(value.Cont);
    if (value.End !== undefined) return visitor.End(value.End);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  export const filterSensitiveLog = (obj: SelectObjectContentEventStream): any => {
    if (obj.Records !== undefined) return { Records: RecordsEvent.filterSensitiveLog(obj.Records) };
    if (obj.Stats !== undefined) return { Stats: StatsEvent.filterSensitiveLog(obj.Stats) };
    if (obj.Progress !== undefined) return { Progress: ProgressEvent.filterSensitiveLog(obj.Progress) };
    if (obj.Cont !== undefined) return { Cont: ContinuationEvent.filterSensitiveLog(obj.Cont) };
    if (obj.End !== undefined) return { End: EndEvent.filterSensitiveLog(obj.End) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

export interface SelectObjectContentOutput {
  /**
   * <p>The array of results.</p>
   */
  Payload?: AsyncIterable<SelectObjectContentEventStream>;
}

export namespace SelectObjectContentOutput {
  export const filterSensitiveLog = (obj: SelectObjectContentOutput): any => ({
    ...obj,
    ...(obj.Payload && { Payload: "STREAMING_CONTENT" }),
  });
}

/**
 * <p>Container for specifying if periodic <code>QueryProgress</code> messages should be
 *          sent.</p>
 */
export interface RequestProgress {
  /**
   * <p>Specifies whether periodic QueryProgress frames should be sent. Valid values: TRUE,
   *          FALSE. Default value: FALSE.</p>
   */
  Enabled?: boolean;
}

export namespace RequestProgress {
  export const filterSensitiveLog = (obj: RequestProgress): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the byte range of the object to get the records from. A record is processed
 *          when its first byte is contained by the range. This parameter is optional, but when
 *          specified, it must not be empty. See RFC 2616, Section 14.35.1 about how to specify the
 *          start and end of the range.</p>
 */
export interface ScanRange {
  /**
   * <p>Specifies the start of the byte range. This parameter is optional. Valid values:
   *          non-negative integers. The default value is 0. If only start is supplied, it means scan
   *          from that point to the end of the file.For example;
   *             <code><scanrange><start>50</start></scanrange></code> means scan
   *          from byte 50 until the end of the file.</p>
   */
  Start?: number;

  /**
   * <p>Specifies the end of the byte range. This parameter is optional. Valid values:
   *          non-negative integers. The default value is one less than the size of the object being
   *          queried. If only the End parameter is supplied, it is interpreted to mean scan the last N
   *          bytes of the file. For example,
   *             <code><scanrange><end>50</end></scanrange></code> means scan the
   *          last 50 bytes.</p>
   */
  End?: number;
}

export namespace ScanRange {
  export const filterSensitiveLog = (obj: ScanRange): any => ({
    ...obj,
  });
}

/**
 * <p>Request to filter the contents of an Amazon S3 object based on a simple Structured Query
 *          Language (SQL) statement. In the request, along with the SQL expression, you must specify a
 *          data serialization format (JSON or CSV) of the object. Amazon S3 uses this to parse object data
 *          into records. It returns only records that match the specified SQL expression. You must
 *          also specify the data serialization format for the response. For more information, see
 *             <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectSELECTContent.html">S3Select API Documentation</a>.</p>
 */
export interface SelectObjectContentRequest {
  /**
   * <p>The S3 bucket.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The object key.</p>
   */
  Key: string | undefined;

  /**
   * <p>The SSE Algorithm used to encrypt the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Server-Side Encryption (Using Customer-Provided Encryption Keys</a>. </p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>The SSE Customer Key. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Server-Side Encryption
   *             (Using Customer-Provided Encryption Keys</a>. </p>
   */
  SSECustomerKey?: string;

  /**
   * <p>The SSE Customer Key MD5. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerSideEncryptionCustomerKeys.html">Server-Side Encryption
   *             (Using Customer-Provided Encryption Keys</a>. </p>
   */
  SSECustomerKeyMD5?: string;

  /**
   * <p>The expression that is used to query the object.</p>
   */
  Expression: string | undefined;

  /**
   * <p>The type of the provided expression (for example, SQL).</p>
   */
  ExpressionType: ExpressionType | string | undefined;

  /**
   * <p>Specifies if periodic request progress information should be enabled.</p>
   */
  RequestProgress?: RequestProgress;

  /**
   * <p>Describes the format of the data in the object that is being queried.</p>
   */
  InputSerialization: InputSerialization | undefined;

  /**
   * <p>Describes the format of the data that you want Amazon S3 to return in response.</p>
   */
  OutputSerialization: OutputSerialization | undefined;

  /**
   * <p>Specifies the byte range of the object to get the records from. A record is processed
   *          when its first byte is contained by the range. This parameter is optional, but when
   *          specified, it must not be empty. See RFC 2616, Section 14.35.1 about how to specify the
   *          start and end of the range.</p>
   *          <p>
   *             <code>ScanRange</code>may be used in the following ways:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code><scanrange><start>50</start><end>100</end></scanrange></code>
   *                - process only the records starting between the bytes 50 and 100 (inclusive, counting
   *                from zero)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code><scanrange><start>50</start></scanrange></code> -
   *                process only the records starting after the byte 50</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code><scanrange><end>50</end></scanrange></code> -
   *                process only the records within the last 50 bytes of the file.</p>
   *             </li>
   *          </ul>
   */
  ScanRange?: ScanRange;

  /**
   * <p>The account id of the expected bucket owner. If the bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;
}

export namespace SelectObjectContentRequest {
  export const filterSensitiveLog = (obj: SelectObjectContentRequest): any => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
  });
}

export interface UploadPartOutput {
  /**
   * <p>The server-side encryption algorithm used when storing this object in Amazon S3 (for example,
   *          AES256, aws:kms).</p>
   */
  ServerSideEncryption?: ServerSideEncryption | string;

  /**
   * <p>Entity tag for the uploaded object.</p>
   */
  ETag?: string;

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
   *          customer managed customer master key (CMK) was used for the object.</p>
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

export namespace UploadPartOutput {
  export const filterSensitiveLog = (obj: UploadPartOutput): any => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
  });
}

export interface UploadPartRequest {
  /**
   * <p>Object data.</p>
   */
  Body?: Readable | ReadableStream | Blob;

  /**
   * <p>The name of the bucket to which the multipart upload was initiated.</p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Size of the body in bytes. This parameter is useful when the size of the body cannot be
   *          determined automatically.</p>
   */
  ContentLength?: number;

  /**
   * <p>The base64-encoded 128-bit MD5 digest of the part data. This parameter is auto-populated
   *          when using the command from the CLI. This parameter is required if object lock parameters
   *          are specified.</p>
   */
  ContentMD5?: string;

  /**
   * <p>Object key for which the multipart upload was initiated.</p>
   */
  Key: string | undefined;

  /**
   * <p>Part number of part being uploaded. This is a positive integer between 1 and
   *          10,000.</p>
   */
  PartNumber: number | undefined;

  /**
   * <p>Upload ID identifying the multipart upload whose part is being uploaded.</p>
   */
  UploadId: string | undefined;

  /**
   * <p>Specifies the algorithm to use to when encrypting the object (for example,
   *          AES256).</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This
   *          value is used to store the object and then it is discarded; Amazon S3 does not store the
   *          encryption key. The key must be appropriate for use with the algorithm specified in the
   *             <code>x-amz-server-side-encryption-customer-algorithm header</code>. This must be the
   *          same encryption key specified in the initiate multipart upload request.</p>
   */
  SSECustomerKey?: string;

  /**
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses
   *          this header for a message integrity check to ensure that the encryption key was transmitted
   *          without error.</p>
   */
  SSECustomerKeyMD5?: string;

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

export namespace UploadPartRequest {
  export const filterSensitiveLog = (obj: UploadPartRequest): any => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
  });
}

/**
 * <p>Container for all response elements.</p>
 */
export interface CopyPartResult {
  /**
   * <p>Entity tag of the object.</p>
   */
  ETag?: string;

  /**
   * <p>Date and time at which the object was uploaded.</p>
   */
  LastModified?: Date;
}

export namespace CopyPartResult {
  export const filterSensitiveLog = (obj: CopyPartResult): any => ({
    ...obj,
  });
}

export interface UploadPartCopyOutput {
  /**
   * <p>The version of the source object that was copied, if you have enabled versioning on the
   *          source bucket.</p>
   */
  CopySourceVersionId?: string;

  /**
   * <p>Container for all response elements.</p>
   */
  CopyPartResult?: CopyPartResult;

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
   * <p>Indicates whether the multipart upload uses an S3 Bucket Key for server-side encryption with AWS KMS (SSE-KMS).</p>
   */
  BucketKeyEnabled?: boolean;

  /**
   * <p>If present, indicates that the requester was successfully charged for the
   *          request.</p>
   */
  RequestCharged?: RequestCharged | string;
}

export namespace UploadPartCopyOutput {
  export const filterSensitiveLog = (obj: UploadPartCopyOutput): any => ({
    ...obj,
    ...(obj.SSEKMSKeyId && { SSEKMSKeyId: SENSITIVE_STRING }),
  });
}

export interface UploadPartCopyRequest {
  /**
   * <p>The bucket name.</p>
   *          <p>When using this API with an access point, you must direct requests to the access point hostname. The access point hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.s3-accesspoint.<i>Region</i>.amazonaws.com. When using this operation with an access point through the AWS SDKs, you provide the access point ARN in place of the bucket name. For more information about access point ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html">Using Access Points</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   *          <p>When using this API with Amazon S3 on Outposts, you must direct requests to the S3 on Outposts hostname. The S3 on Outposts hostname takes the form <i>AccessPointName</i>-<i>AccountId</i>.<i>outpostID</i>.s3-outposts.<i>Region</i>.amazonaws.com. When using this operation using S3 on Outposts through the AWS SDKs, you provide the Outposts bucket ARN in place of the bucket name. For more information about S3 on Outposts ARNs, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/S3onOutposts.html">Using S3 on Outposts</a> in the <i>Amazon Simple Storage Service Developer Guide</i>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Specifies the source object for the copy operation. You specify the value in one of two
   *          formats, depending on whether you want to access the source object through an <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/access-points.html">access
   *          point</a>:</p>
   *          <ul>
   *             <li>
   *                <p>For objects not accessed through an access point, specify the name of the source
   *                bucket and key of the source object, separated by a slash (/). For example, to copy
   *                the object <code>reports/january.pdf</code> from the bucket
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
   * <p>The range of bytes to copy from the source object. The range value must use the form
   *          bytes=first-last, where the first and last are the zero-based byte offsets to copy. For
   *          example, bytes=0-9 indicates that you want to copy the first 10 bytes of the source. You
   *          can copy a range only if the source object is greater than 5 MB.</p>
   */
  CopySourceRange?: string;

  /**
   * <p>Object key for which the multipart upload was initiated.</p>
   */
  Key: string | undefined;

  /**
   * <p>Part number of part being copied. This is a positive integer between 1 and
   *          10,000.</p>
   */
  PartNumber: number | undefined;

  /**
   * <p>Upload ID identifying the multipart upload whose part is being copied.</p>
   */
  UploadId: string | undefined;

  /**
   * <p>Specifies the algorithm to use to when encrypting the object (for example,
   *          AES256).</p>
   */
  SSECustomerAlgorithm?: string;

  /**
   * <p>Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This
   *          value is used to store the object and then it is discarded; Amazon S3 does not store the
   *          encryption key. The key must be appropriate for use with the algorithm specified in the
   *             <code>x-amz-server-side-encryption-customer-algorithm</code> header. This must be the
   *          same encryption key specified in the initiate multipart upload request.</p>
   */
  SSECustomerKey?: string;

  /**
   * <p>Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses
   *          this header for a message integrity check to ensure that the encryption key was transmitted
   *          without error.</p>
   */
  SSECustomerKeyMD5?: string;

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
   * <p>The account id of the expected destination bucket owner. If the destination bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedBucketOwner?: string;

  /**
   * <p>The account id of the expected source bucket owner. If the source bucket is owned by a different account, the request will fail with an HTTP <code>403 (Access Denied)</code> error.</p>
   */
  ExpectedSourceBucketOwner?: string;
}

export namespace UploadPartCopyRequest {
  export const filterSensitiveLog = (obj: UploadPartCopyRequest): any => ({
    ...obj,
    ...(obj.SSECustomerKey && { SSECustomerKey: SENSITIVE_STRING }),
    ...(obj.CopySourceSSECustomerKey && { CopySourceSSECustomerKey: SENSITIVE_STRING }),
  });
}
