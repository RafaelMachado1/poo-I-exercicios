export class Video {
	constructor(
		private id: string,
		private title: string,
		private duration: number,
		private uploadDate: string
	) {}

	public getId = (): string => {
		return this.id
	}

	public setId = (newId: string): void => {
		this.id = newId
	}

	public getTitle = (): string => {
		return this.title
	}

	public setTitle = (newName: string): void => {
		this.title = newName
	}

	public getDuration = (): number => {
		return this.duration
	}

	public setDuration = (newDuration: number): void => {
		this.duration = newDuration
	}

    public getUpload = (): string => {
		return this.uploadDate
	}

	public setUpload = (newUpload: string): void => {
		this.uploadDate = newUpload
	}
}