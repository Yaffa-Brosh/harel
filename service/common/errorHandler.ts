import { AppException } from '../common/exceptions';
import * as express from 'express';
import { Console } from 'console';

const logger = new Console(process.stdout, process.stderr);
export const handleError = (req:express.Request, error: Error): Promise<DataResponse<any>> => {
        if (error instanceof AppException) {
            const { message } = error;

            logger.error(message, error.code)
            logger.info(error.stack)

            return Promise.resolve({
                data: null,
                error: { message },
            });
        }

        throw error;
    }


/**
 * Defines a success response with content.
 */
export interface DataResponse<T> {
  data: T;
  error: {
      message: string;
  };
}