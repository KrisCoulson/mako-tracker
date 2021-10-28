import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  DatetimeLocalField,
  Submit,
} from '@redwoodjs/forms'
const { zonedTimeToUtc, utcToZonedTime, format } = require('date-fns-tz')

const formatDatetime = (value) => {
  if (value) {
    const date = zonedTimeToUtc(new Date(value), Intl.DateTimeFormat().resolvedOptions().timeZone)
    return format(date, "yyyy-MM-dd'T'HH:mm")

  }
}

const EventForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.event?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="type"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Type
        </Label>
        <TextField
          name="type"
          defaultValue={props.event?.type}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="type" className="rw-field-error" />

        <Label
          name="date"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Date
        </Label>
        <DatetimeLocalField
          name="date"
          defaultValue={formatDatetime(props.event?.date)}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="date" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default EventForm
