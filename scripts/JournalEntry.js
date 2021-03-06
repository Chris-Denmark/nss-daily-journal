/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
  return `
      <section id="entry--${entry.id}" class="journalEntry">
      <ul>
          <div class="entry__date">${entry.date}</div>
          <div class="entry__concept">${entry.concept}</div>
          <div class="entry__entry">${entry.entry}</div>
          <div class="entry__mood">${entry.mood}</div>
      </ul>
      </section>
  `
}