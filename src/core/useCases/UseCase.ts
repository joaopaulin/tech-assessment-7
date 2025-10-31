export interface UseCase<InputData, OutputData> {
  execute: (input: InputData) => Promise<OutputData>;
}
