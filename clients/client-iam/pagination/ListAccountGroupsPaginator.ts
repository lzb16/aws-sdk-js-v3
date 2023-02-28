import { IAM } from "../IAM";
import { IAMClient } from "../IAMClient";
import {
  ListAccountGroupsCommand,
  ListAccountGroupsCommandInput,
  ListAccountGroupsCommandOutput,
} from "../commands/ListAccountGroupsCommand";
import { IAMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IAMClient,
  input: ListAccountGroupsCommandInput,
  ...args: any
): Promise<ListAccountGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAccountGroupsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IAM,
  input: ListAccountGroupsCommandInput,
  ...args: any
): Promise<ListAccountGroupsCommandOutput> => {
  // @ts-ignore
  return await client.listAccountGroups(input, ...args);
};
export async function* paginateListAccountGroups(
  config: IAMPaginationConfiguration,
  input: ListAccountGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListAccountGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAccountGroupsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof IAM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IAMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IAM | IAMClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
