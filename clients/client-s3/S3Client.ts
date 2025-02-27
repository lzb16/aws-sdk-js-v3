import {
  AbortMultipartUploadCommandInput,
  AbortMultipartUploadCommandOutput,
} from "./commands/AbortMultipartUploadCommand";
import { BatchRestoreObjectCommandInput, BatchRestoreObjectCommandOutput } from "./commands/BatchRestoreObjectCommand";
import {
  CompleteMultipartUploadCommandInput,
  CompleteMultipartUploadCommandOutput,
} from "./commands/CompleteMultipartUploadCommand";
import { CopyObjectCommandInput, CopyObjectCommandOutput } from "./commands/CopyObjectCommand";
import { CreateBucketCommandInput, CreateBucketCommandOutput } from "./commands/CreateBucketCommand";
import {
  CreateMultipartUploadCommandInput,
  CreateMultipartUploadCommandOutput,
} from "./commands/CreateMultipartUploadCommand";
import { CreateSnapshotCommandInput, CreateSnapshotCommandOutput } from "./commands/CreateSnapshotCommand";
import {
  CreateSnapshotPolicyCommandInput,
  CreateSnapshotPolicyCommandOutput,
} from "./commands/CreateSnapshotPolicyCommand";
import { DedupstatCommandInput, DedupstatCommandOutput } from "./commands/DedupstatCommand";
import { DeleteAgentsCommandInput, DeleteAgentsCommandOutput } from "./commands/DeleteAgentsCommand";
import { DeleteBucketAdrCommandInput, DeleteBucketAdrCommandOutput } from "./commands/DeleteBucketAdrCommand";
import {
  DeleteBucketAnalyticsConfigurationCommandInput,
  DeleteBucketAnalyticsConfigurationCommandOutput,
} from "./commands/DeleteBucketAnalyticsConfigurationCommand";
import { DeleteBucketBtsCommandInput, DeleteBucketBtsCommandOutput } from "./commands/DeleteBucketBtsCommand";
import { DeleteBucketCommandInput, DeleteBucketCommandOutput } from "./commands/DeleteBucketCommand";
import {
  DeleteBucketCompressionConfigurationCommandInput,
  DeleteBucketCompressionConfigurationCommandOutput,
} from "./commands/DeleteBucketCompressionConfigurationCommand";
import { DeleteBucketCorsCommandInput, DeleteBucketCorsCommandOutput } from "./commands/DeleteBucketCorsCommand";
import { DeleteBucketDedupCommandInput, DeleteBucketDedupCommandOutput } from "./commands/DeleteBucketDedupCommand";
import {
  DeleteBucketEncryptionCommandInput,
  DeleteBucketEncryptionCommandOutput,
} from "./commands/DeleteBucketEncryptionCommand";
import {
  DeleteBucketIntelligentTieringConfigurationCommandInput,
  DeleteBucketIntelligentTieringConfigurationCommandOutput,
} from "./commands/DeleteBucketIntelligentTieringConfigurationCommand";
import {
  DeleteBucketInventoryConfigurationCommandInput,
  DeleteBucketInventoryConfigurationCommandOutput,
} from "./commands/DeleteBucketInventoryConfigurationCommand";
import {
  DeleteBucketLifecycleCommandInput,
  DeleteBucketLifecycleCommandOutput,
} from "./commands/DeleteBucketLifecycleCommand";
import {
  DeleteBucketMetricsConfigurationCommandInput,
  DeleteBucketMetricsConfigurationCommandOutput,
} from "./commands/DeleteBucketMetricsConfigurationCommand";
import {
  DeleteBucketObjTrashCommandInput,
  DeleteBucketObjTrashCommandOutput,
} from "./commands/DeleteBucketObjTrashCommand";
import {
  DeleteBucketObjsTrashCommandInput,
  DeleteBucketObjsTrashCommandOutput,
} from "./commands/DeleteBucketObjsTrashCommand";
import {
  DeleteBucketOwnershipControlsCommandInput,
  DeleteBucketOwnershipControlsCommandOutput,
} from "./commands/DeleteBucketOwnershipControlsCommand";
import { DeleteBucketPolicyCommandInput, DeleteBucketPolicyCommandOutput } from "./commands/DeleteBucketPolicyCommand";
import { DeleteBucketQoSCommandInput, DeleteBucketQoSCommandOutput } from "./commands/DeleteBucketQoSCommand";
import {
  DeleteBucketReplicationCommandInput,
  DeleteBucketReplicationCommandOutput,
} from "./commands/DeleteBucketReplicationCommand";
import {
  DeleteBucketSnapshotCommandInput,
  DeleteBucketSnapshotCommandOutput,
} from "./commands/DeleteBucketSnapshotCommand";
import {
  DeleteBucketSnapshotsCommandInput,
  DeleteBucketSnapshotsCommandOutput,
} from "./commands/DeleteBucketSnapshotsCommand";
import {
  DeleteBucketStatisticCommandInput,
  DeleteBucketStatisticCommandOutput,
} from "./commands/DeleteBucketStatisticCommand";
import {
  DeleteBucketTaggingCommandInput,
  DeleteBucketTaggingCommandOutput,
} from "./commands/DeleteBucketTaggingCommand";
import { DeleteBucketTrashCommandInput, DeleteBucketTrashCommandOutput } from "./commands/DeleteBucketTrashCommand";
import {
  DeleteBucketWebsiteCommandInput,
  DeleteBucketWebsiteCommandOutput,
} from "./commands/DeleteBucketWebsiteCommand";
import { DeleteMetaSearchCommandInput, DeleteMetaSearchCommandOutput } from "./commands/DeleteMetaSearchCommand";
import { DeleteOSCPCommandInput, DeleteOSCPCommandOutput } from "./commands/DeleteOSCPCommand";
import { DeleteObjectCommandInput, DeleteObjectCommandOutput } from "./commands/DeleteObjectCommand";
import {
  DeleteObjectTaggingCommandInput,
  DeleteObjectTaggingCommandOutput,
} from "./commands/DeleteObjectTaggingCommand";
import { DeleteObjectsCommandInput, DeleteObjectsCommandOutput } from "./commands/DeleteObjectsCommand";
import {
  DeletePublicAccessBlockCommandInput,
  DeletePublicAccessBlockCommandOutput,
} from "./commands/DeletePublicAccessBlockCommand";
import { DeleteRefererCommandInput, DeleteRefererCommandOutput } from "./commands/DeleteRefererCommand";
import { DeleteSingleAgentCommandInput, DeleteSingleAgentCommandOutput } from "./commands/DeleteSingleAgentCommand";
import { DeleteSnapshotCommandInput, DeleteSnapshotCommandOutput } from "./commands/DeleteSnapshotCommand";
import {
  DeleteSnapshotPolicyCommandInput,
  DeleteSnapshotPolicyCommandOutput,
} from "./commands/DeleteSnapshotPolicyCommand";
import { DeleteSnapshotsCommandInput, DeleteSnapshotsCommandOutput } from "./commands/DeleteSnapshotsCommand";
import { GetAgentConfigCommandInput, GetAgentConfigCommandOutput } from "./commands/GetAgentConfigCommand";
import { GetAgentPathConfigCommandInput, GetAgentPathConfigCommandOutput } from "./commands/GetAgentPathConfigCommand";
import {
  GetBucketAccelerateConfigurationCommandInput,
  GetBucketAccelerateConfigurationCommandOutput,
} from "./commands/GetBucketAccelerateConfigurationCommand";
import { GetBucketAclCommandInput, GetBucketAclCommandOutput } from "./commands/GetBucketAclCommand";
import { GetBucketAdrCommandInput, GetBucketAdrCommandOutput } from "./commands/GetBucketAdrCommand";
import {
  GetBucketAnalyticsConfigurationCommandInput,
  GetBucketAnalyticsConfigurationCommandOutput,
} from "./commands/GetBucketAnalyticsConfigurationCommand";
import { GetBucketBtsCommandInput, GetBucketBtsCommandOutput } from "./commands/GetBucketBtsCommand";
import {
  GetBucketCompressionConfigurationCommandInput,
  GetBucketCompressionConfigurationCommandOutput,
} from "./commands/GetBucketCompressionConfigurationCommand";
import { GetBucketCorsCommandInput, GetBucketCorsCommandOutput } from "./commands/GetBucketCorsCommand";
import {
  GetBucketEncryptionCommandInput,
  GetBucketEncryptionCommandOutput,
} from "./commands/GetBucketEncryptionCommand";
import {
  GetBucketIntelligentTieringConfigurationCommandInput,
  GetBucketIntelligentTieringConfigurationCommandOutput,
} from "./commands/GetBucketIntelligentTieringConfigurationCommand";
import {
  GetBucketInventoryConfigurationCommandInput,
  GetBucketInventoryConfigurationCommandOutput,
} from "./commands/GetBucketInventoryConfigurationCommand";
import {
  GetBucketLifecycleConfigurationCommandInput,
  GetBucketLifecycleConfigurationCommandOutput,
} from "./commands/GetBucketLifecycleConfigurationCommand";
import { GetBucketLocationCommandInput, GetBucketLocationCommandOutput } from "./commands/GetBucketLocationCommand";
import { GetBucketLoggingCommandInput, GetBucketLoggingCommandOutput } from "./commands/GetBucketLoggingCommand";
import {
  GetBucketMetricsConfigurationCommandInput,
  GetBucketMetricsConfigurationCommandOutput,
} from "./commands/GetBucketMetricsConfigurationCommand";
import {
  GetBucketNotificationConfigurationCommandInput,
  GetBucketNotificationConfigurationCommandOutput,
} from "./commands/GetBucketNotificationConfigurationCommand";
import { GetBucketOverviewCommandInput, GetBucketOverviewCommandOutput } from "./commands/GetBucketOverviewCommand";
import {
  GetBucketOwnershipControlsCommandInput,
  GetBucketOwnershipControlsCommandOutput,
} from "./commands/GetBucketOwnershipControlsCommand";
import { GetBucketPolicyCommandInput, GetBucketPolicyCommandOutput } from "./commands/GetBucketPolicyCommand";
import {
  GetBucketPolicyStatusCommandInput,
  GetBucketPolicyStatusCommandOutput,
} from "./commands/GetBucketPolicyStatusCommand";
import { GetBucketQoSCommandInput, GetBucketQoSCommandOutput } from "./commands/GetBucketQoSCommand";
import { GetBucketQuotaCommandInput, GetBucketQuotaCommandOutput } from "./commands/GetBucketQuotaCommand";
import {
  GetBucketReplicationCommandInput,
  GetBucketReplicationCommandOutput,
} from "./commands/GetBucketReplicationCommand";
import {
  GetBucketRequestPaymentCommandInput,
  GetBucketRequestPaymentCommandOutput,
} from "./commands/GetBucketRequestPaymentCommand";
import { GetBucketSnapshotCommandInput, GetBucketSnapshotCommandOutput } from "./commands/GetBucketSnapshotCommand";
import { GetBucketStatisticCommandInput, GetBucketStatisticCommandOutput } from "./commands/GetBucketStatisticCommand";
import {
  GetBucketStorageInfoCommandInput,
  GetBucketStorageInfoCommandOutput,
} from "./commands/GetBucketStorageInfoCommand";
import { GetBucketTaggingCommandInput, GetBucketTaggingCommandOutput } from "./commands/GetBucketTaggingCommand";
import { GetBucketTrashCommandInput, GetBucketTrashCommandOutput } from "./commands/GetBucketTrashCommand";
import {
  GetBucketTrashObjListCommandInput,
  GetBucketTrashObjListCommandOutput,
} from "./commands/GetBucketTrashObjListCommand";
import {
  GetBucketVersioningCommandInput,
  GetBucketVersioningCommandOutput,
} from "./commands/GetBucketVersioningCommand";
import { GetBucketWebsiteCommandInput, GetBucketWebsiteCommandOutput } from "./commands/GetBucketWebsiteCommand";
import {
  GetOSCPConfigurationCommandInput,
  GetOSCPConfigurationCommandOutput,
} from "./commands/GetOSCPConfigurationCommand";
import { GetObjectAclCommandInput, GetObjectAclCommandOutput } from "./commands/GetObjectAclCommand";
import { GetObjectCommandInput, GetObjectCommandOutput } from "./commands/GetObjectCommand";
import { GetObjectLegalHoldCommandInput, GetObjectLegalHoldCommandOutput } from "./commands/GetObjectLegalHoldCommand";
import {
  GetObjectLockConfigurationCommandInput,
  GetObjectLockConfigurationCommandOutput,
} from "./commands/GetObjectLockConfigurationCommand";
import { GetObjectRetentionCommandInput, GetObjectRetentionCommandOutput } from "./commands/GetObjectRetentionCommand";
import { GetObjectSymlinkCommandInput, GetObjectSymlinkCommandOutput } from "./commands/GetObjectSymlinkCommand";
import { GetObjectTaggingCommandInput, GetObjectTaggingCommandOutput } from "./commands/GetObjectTaggingCommand";
import { GetObjectTorrentCommandInput, GetObjectTorrentCommandOutput } from "./commands/GetObjectTorrentCommand";
import { GetObjectWORMCommandInput, GetObjectWORMCommandOutput } from "./commands/GetObjectWORMCommand";
import {
  GetPublicAccessBlockCommandInput,
  GetPublicAccessBlockCommandOutput,
} from "./commands/GetPublicAccessBlockCommand";
import { GetRefererCommandInput, GetRefererCommandOutput } from "./commands/GetRefererCommand";
import { GetSnapshotInfoCommandInput, GetSnapshotInfoCommandOutput } from "./commands/GetSnapshotInfoCommand";
import { GetSnapshotPolicyCommandInput, GetSnapshotPolicyCommandOutput } from "./commands/GetSnapshotPolicyCommand";
import { GetSnapshotsCommandInput, GetSnapshotsCommandOutput } from "./commands/GetSnapshotsCommand";
import {
  GetWORMConfigurationCommandInput,
  GetWORMConfigurationCommandOutput,
} from "./commands/GetWORMConfigurationCommand";
import {
  GetWORMRetainPeriodCommandInput,
  GetWORMRetainPeriodCommandOutput,
} from "./commands/GetWORMRetainPeriodCommand";
import { HeadBucketCommandInput, HeadBucketCommandOutput } from "./commands/HeadBucketCommand";
import { HeadBucketObjTrashCommandInput, HeadBucketObjTrashCommandOutput } from "./commands/HeadBucketObjTrashCommand";
import { HeadObjectCommandInput, HeadObjectCommandOutput } from "./commands/HeadObjectCommand";
import {
  IdentityAuthenticationConfigCommandInput,
  IdentityAuthenticationConfigCommandOutput,
} from "./commands/IdentityAuthenticationConfigCommand";
import {
  ListBucketAnalyticsConfigurationsCommandInput,
  ListBucketAnalyticsConfigurationsCommandOutput,
} from "./commands/ListBucketAnalyticsConfigurationsCommand";
import {
  ListBucketIntelligentTieringConfigurationsCommandInput,
  ListBucketIntelligentTieringConfigurationsCommandOutput,
} from "./commands/ListBucketIntelligentTieringConfigurationsCommand";
import {
  ListBucketInventoryConfigurationsCommandInput,
  ListBucketInventoryConfigurationsCommandOutput,
} from "./commands/ListBucketInventoryConfigurationsCommand";
import {
  ListBucketMetricsConfigurationsCommandInput,
  ListBucketMetricsConfigurationsCommandOutput,
} from "./commands/ListBucketMetricsConfigurationsCommand";
import {
  ListBucketSnapshotObjectCommandInput,
  ListBucketSnapshotObjectCommandOutput,
} from "./commands/ListBucketSnapshotObjectCommand";
import {
  ListBucketSnapshotsCommandInput,
  ListBucketSnapshotsCommandOutput,
} from "./commands/ListBucketSnapshotsCommand";
import { ListBucketsCommandInput, ListBucketsCommandOutput } from "./commands/ListBucketsCommand";
import {
  ListMetaSearchBucketsCommandInput,
  ListMetaSearchBucketsCommandOutput,
} from "./commands/ListMetaSearchBucketsCommand";
import { ListMetaSearchCommandInput, ListMetaSearchCommandOutput } from "./commands/ListMetaSearchCommand";
import {
  ListMultipartUploadsCommandInput,
  ListMultipartUploadsCommandOutput,
} from "./commands/ListMultipartUploadsCommand";
import { ListObjectVersionsCommandInput, ListObjectVersionsCommandOutput } from "./commands/ListObjectVersionsCommand";
import { ListObjectsCommandInput, ListObjectsCommandOutput } from "./commands/ListObjectsCommand";
import { ListObjectsV2CommandInput, ListObjectsV2CommandOutput } from "./commands/ListObjectsV2Command";
import { ListPartsCommandInput, ListPartsCommandOutput } from "./commands/ListPartsCommand";
import { MozObjectsCommandInput, MozObjectsCommandOutput } from "./commands/MozObjectsCommand";
import { PostBucketRestoreCommandInput, PostBucketRestoreCommandOutput } from "./commands/PostBucketRestoreCommand";
import { PostBucketTrashCommandInput, PostBucketTrashCommandOutput } from "./commands/PostBucketTrashCommand";
import {
  PutBucketAccelerateConfigurationCommandInput,
  PutBucketAccelerateConfigurationCommandOutput,
} from "./commands/PutBucketAccelerateConfigurationCommand";
import { PutBucketAclCommandInput, PutBucketAclCommandOutput } from "./commands/PutBucketAclCommand";
import { PutBucketAdrCommandInput, PutBucketAdrCommandOutput } from "./commands/PutBucketAdrCommand";
import {
  PutBucketAnalyticsConfigurationCommandInput,
  PutBucketAnalyticsConfigurationCommandOutput,
} from "./commands/PutBucketAnalyticsConfigurationCommand";
import { PutBucketBtsCommandInput, PutBucketBtsCommandOutput } from "./commands/PutBucketBtsCommand";
import {
  PutBucketCompressionConfigurationCommandInput,
  PutBucketCompressionConfigurationCommandOutput,
} from "./commands/PutBucketCompressionConfigurationCommand";
import { PutBucketCorsCommandInput, PutBucketCorsCommandOutput } from "./commands/PutBucketCorsCommand";
import {
  PutBucketEncryptionCommandInput,
  PutBucketEncryptionCommandOutput,
} from "./commands/PutBucketEncryptionCommand";
import {
  PutBucketIntelligentTieringConfigurationCommandInput,
  PutBucketIntelligentTieringConfigurationCommandOutput,
} from "./commands/PutBucketIntelligentTieringConfigurationCommand";
import {
  PutBucketInventoryConfigurationCommandInput,
  PutBucketInventoryConfigurationCommandOutput,
} from "./commands/PutBucketInventoryConfigurationCommand";
import {
  PutBucketLifecycleConfigurationCommandInput,
  PutBucketLifecycleConfigurationCommandOutput,
} from "./commands/PutBucketLifecycleConfigurationCommand";
import { PutBucketLoggingCommandInput, PutBucketLoggingCommandOutput } from "./commands/PutBucketLoggingCommand";
import { PutBucketMetadataCommandInput, PutBucketMetadataCommandOutput } from "./commands/PutBucketMetadataCommand";
import {
  PutBucketMetricsConfigurationCommandInput,
  PutBucketMetricsConfigurationCommandOutput,
} from "./commands/PutBucketMetricsConfigurationCommand";
import {
  PutBucketNotificationConfigurationCommandInput,
  PutBucketNotificationConfigurationCommandOutput,
} from "./commands/PutBucketNotificationConfigurationCommand";
import {
  PutBucketOwnershipControlsCommandInput,
  PutBucketOwnershipControlsCommandOutput,
} from "./commands/PutBucketOwnershipControlsCommand";
import { PutBucketPolicyCommandInput, PutBucketPolicyCommandOutput } from "./commands/PutBucketPolicyCommand";
import { PutBucketQoSCommandInput, PutBucketQoSCommandOutput } from "./commands/PutBucketQoSCommand";
import { PutBucketQuotaCommandInput, PutBucketQuotaCommandOutput } from "./commands/PutBucketQuotaCommand";
import {
  PutBucketRedundancyCommandInput,
  PutBucketRedundancyCommandOutput,
} from "./commands/PutBucketRedundancyCommand";
import {
  PutBucketReplicationCommandInput,
  PutBucketReplicationCommandOutput,
} from "./commands/PutBucketReplicationCommand";
import {
  PutBucketRequestPaymentCommandInput,
  PutBucketRequestPaymentCommandOutput,
} from "./commands/PutBucketRequestPaymentCommand";
import { PutBucketSnapshotCommandInput, PutBucketSnapshotCommandOutput } from "./commands/PutBucketSnapshotCommand";
import {
  PutBucketSnapshotDescriptionCommandInput,
  PutBucketSnapshotDescriptionCommandOutput,
} from "./commands/PutBucketSnapshotDescriptionCommand";
import { PutBucketStatisticCommandInput, PutBucketStatisticCommandOutput } from "./commands/PutBucketStatisticCommand";
import {
  PutBucketStorageClassCommandInput,
  PutBucketStorageClassCommandOutput,
} from "./commands/PutBucketStorageClassCommand";
import { PutBucketTaggingCommandInput, PutBucketTaggingCommandOutput } from "./commands/PutBucketTaggingCommand";
import { PutBucketTrashCommandInput, PutBucketTrashCommandOutput } from "./commands/PutBucketTrashCommand";
import {
  PutBucketVersioningCommandInput,
  PutBucketVersioningCommandOutput,
} from "./commands/PutBucketVersioningCommand";
import { PutBucketWebsiteCommandInput, PutBucketWebsiteCommandOutput } from "./commands/PutBucketWebsiteCommand";
import {
  PutDedupConfigurationCommandInput,
  PutDedupConfigurationCommandOutput,
} from "./commands/PutDedupConfigurationCommand";
import {
  PutMetaSearchConfigurationCommandInput,
  PutMetaSearchConfigurationCommandOutput,
} from "./commands/PutMetaSearchConfigurationCommand";
import {
  PutOSCPConfigurationCommandInput,
  PutOSCPConfigurationCommandOutput,
} from "./commands/PutOSCPConfigurationCommand";
import { PutObjectAclCommandInput, PutObjectAclCommandOutput } from "./commands/PutObjectAclCommand";
import { PutObjectCommandInput, PutObjectCommandOutput } from "./commands/PutObjectCommand";
import { PutObjectLegalHoldCommandInput, PutObjectLegalHoldCommandOutput } from "./commands/PutObjectLegalHoldCommand";
import {
  PutObjectLockConfigurationCommandInput,
  PutObjectLockConfigurationCommandOutput,
} from "./commands/PutObjectLockConfigurationCommand";
import { PutObjectMetadataCommandInput, PutObjectMetadataCommandOutput } from "./commands/PutObjectMetadataCommand";
import { PutObjectRetentionCommandInput, PutObjectRetentionCommandOutput } from "./commands/PutObjectRetentionCommand";
import { PutObjectSymlinkCommandInput, PutObjectSymlinkCommandOutput } from "./commands/PutObjectSymlinkCommand";
import { PutObjectTaggingCommandInput, PutObjectTaggingCommandOutput } from "./commands/PutObjectTaggingCommand";
import { PutObjectWORMCommandInput, PutObjectWORMCommandOutput } from "./commands/PutObjectWORMCommand";
import {
  PutPublicAccessBlockCommandInput,
  PutPublicAccessBlockCommandOutput,
} from "./commands/PutPublicAccessBlockCommand";
import { PutRefererCommandInput, PutRefererCommandOutput } from "./commands/PutRefererCommand";
import {
  PutWORMConfigurationCommandInput,
  PutWORMConfigurationCommandOutput,
} from "./commands/PutWORMConfigurationCommand";
import {
  PutWORMRetainPeriodCommandInput,
  PutWORMRetainPeriodCommandOutput,
} from "./commands/PutWORMRetainPeriodCommand";
import {
  RestoreBucketObjTrashCommandInput,
  RestoreBucketObjTrashCommandOutput,
} from "./commands/RestoreBucketObjTrashCommand";
import {
  RestoreBucketObjsTrashCommandInput,
  RestoreBucketObjsTrashCommandOutput,
} from "./commands/RestoreBucketObjsTrashCommand";
import { RestoreObjectCommandInput, RestoreObjectCommandOutput } from "./commands/RestoreObjectCommand";
import { RollbackSnapshotCommandInput, RollbackSnapshotCommandOutput } from "./commands/RollbackSnapshotCommand";
import {
  SelectObjectContentCommandInput,
  SelectObjectContentCommandOutput,
} from "./commands/SelectObjectContentCommand";
import { UpdateAgentConfigCommandInput, UpdateAgentConfigCommandOutput } from "./commands/UpdateAgentConfigCommand";
import { UpdateSnapshotCommandInput, UpdateSnapshotCommandOutput } from "./commands/UpdateSnapshotCommand";
import { UploadPartCommandInput, UploadPartCommandOutput } from "./commands/UploadPartCommand";
import { UploadPartCopyCommandInput, UploadPartCopyCommandOutput } from "./commands/UploadPartCopyCommand";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "@aws-sdk/config-resolver";
import {
  EventStreamSerdeInputConfig,
  EventStreamSerdeResolvedConfig,
  resolveEventStreamSerdeConfig,
} from "@aws-sdk/eventstream-serde-config-resolver";
import {
  BucketEndpointInputConfig,
  BucketEndpointResolvedConfig,
  resolveBucketEndpointConfig,
} from "@aws-sdk/middleware-bucket-endpoint";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import { getAddExpectContinuePlugin } from "@aws-sdk/middleware-expect-continue";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { RetryInputConfig, RetryResolvedConfig, getRetryPlugin, resolveRetryConfig } from "@aws-sdk/middleware-retry";
import { getUseRegionalEndpointPlugin, getValidateBucketNamePlugin } from "@aws-sdk/middleware-sdk-s3";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  Provider,
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EventStreamSerdeProvider as __EventStreamSerdeProvider,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  StreamHasher as __StreamHasher,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";
import { Readable } from "stream";

export type ServiceInputTypes =
  | AbortMultipartUploadCommandInput
  | BatchRestoreObjectCommandInput
  | CompleteMultipartUploadCommandInput
  | CopyObjectCommandInput
  | CreateBucketCommandInput
  | CreateMultipartUploadCommandInput
  | CreateSnapshotCommandInput
  | CreateSnapshotPolicyCommandInput
  | DedupstatCommandInput
  | DeleteAgentsCommandInput
  | DeleteBucketAdrCommandInput
  | DeleteBucketAnalyticsConfigurationCommandInput
  | DeleteBucketBtsCommandInput
  | DeleteBucketCommandInput
  | DeleteBucketCompressionConfigurationCommandInput
  | DeleteBucketCorsCommandInput
  | DeleteBucketDedupCommandInput
  | DeleteBucketEncryptionCommandInput
  | DeleteBucketIntelligentTieringConfigurationCommandInput
  | DeleteBucketInventoryConfigurationCommandInput
  | DeleteBucketLifecycleCommandInput
  | DeleteBucketMetricsConfigurationCommandInput
  | DeleteBucketObjTrashCommandInput
  | DeleteBucketObjsTrashCommandInput
  | DeleteBucketOwnershipControlsCommandInput
  | DeleteBucketPolicyCommandInput
  | DeleteBucketQoSCommandInput
  | DeleteBucketReplicationCommandInput
  | DeleteBucketSnapshotCommandInput
  | DeleteBucketSnapshotsCommandInput
  | DeleteBucketStatisticCommandInput
  | DeleteBucketTaggingCommandInput
  | DeleteBucketTrashCommandInput
  | DeleteBucketWebsiteCommandInput
  | DeleteMetaSearchCommandInput
  | DeleteOSCPCommandInput
  | DeleteObjectCommandInput
  | DeleteObjectTaggingCommandInput
  | DeleteObjectsCommandInput
  | DeletePublicAccessBlockCommandInput
  | DeleteRefererCommandInput
  | DeleteSingleAgentCommandInput
  | DeleteSnapshotCommandInput
  | DeleteSnapshotPolicyCommandInput
  | DeleteSnapshotsCommandInput
  | GetAgentConfigCommandInput
  | GetAgentPathConfigCommandInput
  | GetBucketAccelerateConfigurationCommandInput
  | GetBucketAclCommandInput
  | GetBucketAdrCommandInput
  | GetBucketAnalyticsConfigurationCommandInput
  | GetBucketBtsCommandInput
  | GetBucketCompressionConfigurationCommandInput
  | GetBucketCorsCommandInput
  | GetBucketEncryptionCommandInput
  | GetBucketIntelligentTieringConfigurationCommandInput
  | GetBucketInventoryConfigurationCommandInput
  | GetBucketLifecycleConfigurationCommandInput
  | GetBucketLocationCommandInput
  | GetBucketLoggingCommandInput
  | GetBucketMetricsConfigurationCommandInput
  | GetBucketNotificationConfigurationCommandInput
  | GetBucketOverviewCommandInput
  | GetBucketOwnershipControlsCommandInput
  | GetBucketPolicyCommandInput
  | GetBucketPolicyStatusCommandInput
  | GetBucketQoSCommandInput
  | GetBucketQuotaCommandInput
  | GetBucketReplicationCommandInput
  | GetBucketRequestPaymentCommandInput
  | GetBucketSnapshotCommandInput
  | GetBucketStatisticCommandInput
  | GetBucketStorageInfoCommandInput
  | GetBucketTaggingCommandInput
  | GetBucketTrashCommandInput
  | GetBucketTrashObjListCommandInput
  | GetBucketVersioningCommandInput
  | GetBucketWebsiteCommandInput
  | GetOSCPConfigurationCommandInput
  | GetObjectAclCommandInput
  | GetObjectCommandInput
  | GetObjectLegalHoldCommandInput
  | GetObjectLockConfigurationCommandInput
  | GetObjectRetentionCommandInput
  | GetObjectSymlinkCommandInput
  | GetObjectTaggingCommandInput
  | GetObjectTorrentCommandInput
  | GetObjectWORMCommandInput
  | GetPublicAccessBlockCommandInput
  | GetRefererCommandInput
  | GetSnapshotInfoCommandInput
  | GetSnapshotPolicyCommandInput
  | GetSnapshotsCommandInput
  | GetWORMConfigurationCommandInput
  | GetWORMRetainPeriodCommandInput
  | HeadBucketCommandInput
  | HeadBucketObjTrashCommandInput
  | HeadObjectCommandInput
  | IdentityAuthenticationConfigCommandInput
  | ListBucketAnalyticsConfigurationsCommandInput
  | ListBucketIntelligentTieringConfigurationsCommandInput
  | ListBucketInventoryConfigurationsCommandInput
  | ListBucketMetricsConfigurationsCommandInput
  | ListBucketSnapshotObjectCommandInput
  | ListBucketSnapshotsCommandInput
  | ListBucketsCommandInput
  | ListMetaSearchBucketsCommandInput
  | ListMetaSearchCommandInput
  | ListMultipartUploadsCommandInput
  | ListObjectVersionsCommandInput
  | ListObjectsCommandInput
  | ListObjectsV2CommandInput
  | ListPartsCommandInput
  | MozObjectsCommandInput
  | PostBucketRestoreCommandInput
  | PostBucketTrashCommandInput
  | PutBucketAccelerateConfigurationCommandInput
  | PutBucketAclCommandInput
  | PutBucketAdrCommandInput
  | PutBucketAnalyticsConfigurationCommandInput
  | PutBucketBtsCommandInput
  | PutBucketCompressionConfigurationCommandInput
  | PutBucketCorsCommandInput
  | PutBucketEncryptionCommandInput
  | PutBucketIntelligentTieringConfigurationCommandInput
  | PutBucketInventoryConfigurationCommandInput
  | PutBucketLifecycleConfigurationCommandInput
  | PutBucketLoggingCommandInput
  | PutBucketMetadataCommandInput
  | PutBucketMetricsConfigurationCommandInput
  | PutBucketNotificationConfigurationCommandInput
  | PutBucketOwnershipControlsCommandInput
  | PutBucketPolicyCommandInput
  | PutBucketQoSCommandInput
  | PutBucketQuotaCommandInput
  | PutBucketRedundancyCommandInput
  | PutBucketReplicationCommandInput
  | PutBucketRequestPaymentCommandInput
  | PutBucketSnapshotCommandInput
  | PutBucketSnapshotDescriptionCommandInput
  | PutBucketStatisticCommandInput
  | PutBucketStorageClassCommandInput
  | PutBucketTaggingCommandInput
  | PutBucketTrashCommandInput
  | PutBucketVersioningCommandInput
  | PutBucketWebsiteCommandInput
  | PutDedupConfigurationCommandInput
  | PutMetaSearchConfigurationCommandInput
  | PutOSCPConfigurationCommandInput
  | PutObjectAclCommandInput
  | PutObjectCommandInput
  | PutObjectLegalHoldCommandInput
  | PutObjectLockConfigurationCommandInput
  | PutObjectMetadataCommandInput
  | PutObjectRetentionCommandInput
  | PutObjectSymlinkCommandInput
  | PutObjectTaggingCommandInput
  | PutObjectWORMCommandInput
  | PutPublicAccessBlockCommandInput
  | PutRefererCommandInput
  | PutWORMConfigurationCommandInput
  | PutWORMRetainPeriodCommandInput
  | RestoreBucketObjTrashCommandInput
  | RestoreBucketObjsTrashCommandInput
  | RestoreObjectCommandInput
  | RollbackSnapshotCommandInput
  | SelectObjectContentCommandInput
  | UpdateAgentConfigCommandInput
  | UpdateSnapshotCommandInput
  | UploadPartCommandInput
  | UploadPartCopyCommandInput;

export type ServiceOutputTypes =
  | AbortMultipartUploadCommandOutput
  | BatchRestoreObjectCommandOutput
  | CompleteMultipartUploadCommandOutput
  | CopyObjectCommandOutput
  | CreateBucketCommandOutput
  | CreateMultipartUploadCommandOutput
  | CreateSnapshotCommandOutput
  | CreateSnapshotPolicyCommandOutput
  | DedupstatCommandOutput
  | DeleteAgentsCommandOutput
  | DeleteBucketAdrCommandOutput
  | DeleteBucketAnalyticsConfigurationCommandOutput
  | DeleteBucketBtsCommandOutput
  | DeleteBucketCommandOutput
  | DeleteBucketCompressionConfigurationCommandOutput
  | DeleteBucketCorsCommandOutput
  | DeleteBucketDedupCommandOutput
  | DeleteBucketEncryptionCommandOutput
  | DeleteBucketIntelligentTieringConfigurationCommandOutput
  | DeleteBucketInventoryConfigurationCommandOutput
  | DeleteBucketLifecycleCommandOutput
  | DeleteBucketMetricsConfigurationCommandOutput
  | DeleteBucketObjTrashCommandOutput
  | DeleteBucketObjsTrashCommandOutput
  | DeleteBucketOwnershipControlsCommandOutput
  | DeleteBucketPolicyCommandOutput
  | DeleteBucketQoSCommandOutput
  | DeleteBucketReplicationCommandOutput
  | DeleteBucketSnapshotCommandOutput
  | DeleteBucketSnapshotsCommandOutput
  | DeleteBucketStatisticCommandOutput
  | DeleteBucketTaggingCommandOutput
  | DeleteBucketTrashCommandOutput
  | DeleteBucketWebsiteCommandOutput
  | DeleteMetaSearchCommandOutput
  | DeleteOSCPCommandOutput
  | DeleteObjectCommandOutput
  | DeleteObjectTaggingCommandOutput
  | DeleteObjectsCommandOutput
  | DeletePublicAccessBlockCommandOutput
  | DeleteRefererCommandOutput
  | DeleteSingleAgentCommandOutput
  | DeleteSnapshotCommandOutput
  | DeleteSnapshotPolicyCommandOutput
  | DeleteSnapshotsCommandOutput
  | GetAgentConfigCommandOutput
  | GetAgentPathConfigCommandOutput
  | GetBucketAccelerateConfigurationCommandOutput
  | GetBucketAclCommandOutput
  | GetBucketAdrCommandOutput
  | GetBucketAnalyticsConfigurationCommandOutput
  | GetBucketBtsCommandOutput
  | GetBucketCompressionConfigurationCommandOutput
  | GetBucketCorsCommandOutput
  | GetBucketEncryptionCommandOutput
  | GetBucketIntelligentTieringConfigurationCommandOutput
  | GetBucketInventoryConfigurationCommandOutput
  | GetBucketLifecycleConfigurationCommandOutput
  | GetBucketLocationCommandOutput
  | GetBucketLoggingCommandOutput
  | GetBucketMetricsConfigurationCommandOutput
  | GetBucketNotificationConfigurationCommandOutput
  | GetBucketOverviewCommandOutput
  | GetBucketOwnershipControlsCommandOutput
  | GetBucketPolicyCommandOutput
  | GetBucketPolicyStatusCommandOutput
  | GetBucketQoSCommandOutput
  | GetBucketQuotaCommandOutput
  | GetBucketReplicationCommandOutput
  | GetBucketRequestPaymentCommandOutput
  | GetBucketSnapshotCommandOutput
  | GetBucketStatisticCommandOutput
  | GetBucketStorageInfoCommandOutput
  | GetBucketTaggingCommandOutput
  | GetBucketTrashCommandOutput
  | GetBucketTrashObjListCommandOutput
  | GetBucketVersioningCommandOutput
  | GetBucketWebsiteCommandOutput
  | GetOSCPConfigurationCommandOutput
  | GetObjectAclCommandOutput
  | GetObjectCommandOutput
  | GetObjectLegalHoldCommandOutput
  | GetObjectLockConfigurationCommandOutput
  | GetObjectRetentionCommandOutput
  | GetObjectSymlinkCommandOutput
  | GetObjectTaggingCommandOutput
  | GetObjectTorrentCommandOutput
  | GetObjectWORMCommandOutput
  | GetPublicAccessBlockCommandOutput
  | GetRefererCommandOutput
  | GetSnapshotInfoCommandOutput
  | GetSnapshotPolicyCommandOutput
  | GetSnapshotsCommandOutput
  | GetWORMConfigurationCommandOutput
  | GetWORMRetainPeriodCommandOutput
  | HeadBucketCommandOutput
  | HeadBucketObjTrashCommandOutput
  | HeadObjectCommandOutput
  | IdentityAuthenticationConfigCommandOutput
  | ListBucketAnalyticsConfigurationsCommandOutput
  | ListBucketIntelligentTieringConfigurationsCommandOutput
  | ListBucketInventoryConfigurationsCommandOutput
  | ListBucketMetricsConfigurationsCommandOutput
  | ListBucketSnapshotObjectCommandOutput
  | ListBucketSnapshotsCommandOutput
  | ListBucketsCommandOutput
  | ListMetaSearchBucketsCommandOutput
  | ListMetaSearchCommandOutput
  | ListMultipartUploadsCommandOutput
  | ListObjectVersionsCommandOutput
  | ListObjectsCommandOutput
  | ListObjectsV2CommandOutput
  | ListPartsCommandOutput
  | MozObjectsCommandOutput
  | PostBucketRestoreCommandOutput
  | PostBucketTrashCommandOutput
  | PutBucketAccelerateConfigurationCommandOutput
  | PutBucketAclCommandOutput
  | PutBucketAdrCommandOutput
  | PutBucketAnalyticsConfigurationCommandOutput
  | PutBucketBtsCommandOutput
  | PutBucketCompressionConfigurationCommandOutput
  | PutBucketCorsCommandOutput
  | PutBucketEncryptionCommandOutput
  | PutBucketIntelligentTieringConfigurationCommandOutput
  | PutBucketInventoryConfigurationCommandOutput
  | PutBucketLifecycleConfigurationCommandOutput
  | PutBucketLoggingCommandOutput
  | PutBucketMetadataCommandOutput
  | PutBucketMetricsConfigurationCommandOutput
  | PutBucketNotificationConfigurationCommandOutput
  | PutBucketOwnershipControlsCommandOutput
  | PutBucketPolicyCommandOutput
  | PutBucketQoSCommandOutput
  | PutBucketQuotaCommandOutput
  | PutBucketRedundancyCommandOutput
  | PutBucketReplicationCommandOutput
  | PutBucketRequestPaymentCommandOutput
  | PutBucketSnapshotCommandOutput
  | PutBucketSnapshotDescriptionCommandOutput
  | PutBucketStatisticCommandOutput
  | PutBucketStorageClassCommandOutput
  | PutBucketTaggingCommandOutput
  | PutBucketTrashCommandOutput
  | PutBucketVersioningCommandOutput
  | PutBucketWebsiteCommandOutput
  | PutDedupConfigurationCommandOutput
  | PutMetaSearchConfigurationCommandOutput
  | PutOSCPConfigurationCommandOutput
  | PutObjectAclCommandOutput
  | PutObjectCommandOutput
  | PutObjectLegalHoldCommandOutput
  | PutObjectLockConfigurationCommandOutput
  | PutObjectMetadataCommandOutput
  | PutObjectRetentionCommandOutput
  | PutObjectSymlinkCommandOutput
  | PutObjectTaggingCommandOutput
  | PutObjectWORMCommandOutput
  | PutPublicAccessBlockCommandOutput
  | PutRefererCommandOutput
  | PutWORMConfigurationCommandOutput
  | PutWORMRetainPeriodCommandOutput
  | RestoreBucketObjTrashCommandOutput
  | RestoreBucketObjsTrashCommandOutput
  | RestoreObjectCommandOutput
  | RollbackSnapshotCommandOutput
  | SelectObjectContentCommandOutput
  | UpdateAgentConfigCommandOutput
  | UpdateSnapshotCommandOutput
  | UploadPartCommandOutput
  | UploadPartCopyCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Default credentials provider; Not available in browser runtime.
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes MD5 hashes
   */
  md5?: __HashConstructor;

  /**
   * A function that, given a hash constructor and a stream, calculates the
   * hash of the streamed value
   */
  streamHasher?: __StreamHasher<Readable> | __StreamHasher<Blob>;

  /**
   * Whether to escape request path when signing the request.
   */
  signingEscapePath?: boolean;

  /**
   * Whether to override the request region with the region inferred from requested resource's ARN. Defaults to false.
   */
  useArnRegion?: boolean | Provider<boolean>;
  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The function that provides necessary utilities for generating and parsing event stream
   */
  eventStreamSerdeProvider?: __EventStreamSerdeProvider;
}

export type S3ClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  BucketEndpointInputConfig &
  UserAgentInputConfig &
  EventStreamSerdeInputConfig;

export type S3ClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  BucketEndpointResolvedConfig &
  UserAgentResolvedConfig &
  EventStreamSerdeResolvedConfig;

/**
 * <p></p>
 */
export class S3Client extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  S3ClientResolvedConfig
> {
  readonly config: S3ClientResolvedConfig;

  constructor(configuration: S3ClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration,
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveRetryConfig(_config_2);
    let _config_4 = resolveHostHeaderConfig(_config_3);
    let _config_5 = resolveAwsAuthConfig(_config_4);
    let _config_6 = resolveBucketEndpointConfig(_config_5);
    let _config_7 = resolveUserAgentConfig(_config_6);
    let _config_8 = resolveEventStreamSerdeConfig(_config_7);
    super(_config_8);
    this.config = _config_8;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getValidateBucketNamePlugin(this.config));
    this.middlewareStack.use(getUseRegionalEndpointPlugin(this.config));
    this.middlewareStack.use(getAddExpectContinuePlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
