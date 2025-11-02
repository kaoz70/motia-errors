import { StreamConfig } from "motia";
import { z } from "zod";

// Schema for story generation progress updates
export const simpleTestSchema = z.object({
	id: z.string(),
	message: z.string(),
});

export type StoryProgress = z.infer<typeof simpleTestSchema>;

export const config: StreamConfig = {
	/**
	 * Stream name for story generation progress
	 * Clients can subscribe to this to get real-time updates
	 */
	name: "streamTest",

	/**
	 * Schema defines the structure of progress updates
	 * This will be used when we integrate LLM and TTS streaming
	 */
	schema: simpleTestSchema,

	/**
	 * Default storage type for the stream
	 */
	baseConfig: { storageType: "default" },
};
