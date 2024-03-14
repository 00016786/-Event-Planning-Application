document.addEventListener('DOMContentLoaded', function () {
    // Function to fetch events from the server and render them on the page
    function fetchEvents() {
        fetch('/events')
            .then(response => response.json())
            .then(events => renderEvents(events))
            .catch(error => console.error('Error fetching events:', error));
    }

    // Function to render events on the page
    function renderEvents(events) {
        const eventsSection = document.getElementById('events');
        eventsSection.innerHTML = ''; // Clear previous events

        events.forEach(event => {
            const eventDiv = document.createElement('div');
            eventDiv.classList.add('event');

            const eventDate = new Date(event.date);
            const formattedDate = eventDate.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });

            eventDiv.innerHTML = `
                <h2>${event.title}</h2>
                <p><strong>Date:</strong> ${formattedDate}</p>
                <p><strong>Location:</strong> ${event.location}</p>
                <p>${event.description}</p>
                <div class="button-group">
                    <button onclick="editEvent('${event._id}')">Edit</button>
                    <button onclick="deleteEvent('${event._id}')">Delete</button>
                </div>
            `;

            eventsSection.appendChild(eventDiv);
        });
    }

    // Function to handle event deletion
    function deleteEvent(eventId) {
        if (confirm('Are you sure you want to delete this event?')) {
            fetch(`/events/${eventId}`, {
                method: 'DELETE'
            })
            .then(() => fetchEvents())
            .catch(error => console.error('Error deleting event:', error));
        }
    }

    // Function to handle event editing (not implemented in this example)
    function editEvent(eventId) {
        // Implement edit functionality as needed
        console.log('Editing event with ID:', eventId);
    }

    // Fetch events when the page loads
    fetchEvents();
});
