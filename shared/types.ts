import { CreateServerConfig } from "../versions/v1/template/types";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CliFnArgs {}

export type UpgradeArgs = CliFnArgs & { from: string };
export type ServerArgs = CliFnArgs &
  CreateServerConfig & {
    outputPath: string;
    inputPath: string;
    metadata: Record<string, any>;
  };

type CliFunction<T extends CliFnArgs = CliFnArgs, ReturnType = void> = (
  args: T
) => Promise<ReturnType>;

export interface CliVersion {
  server: CliFunction<ServerArgs, string>;
  types: CliFunction;
  upgrade: CliFunction<UpgradeArgs>;
}
