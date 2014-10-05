package org.home.gitDemo.servlets;

import java.io.IOException;
import java.io.Writer;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.home.gitDemo.pojo.Message;

import com.google.gson.Gson;

/**
 * Servlet implementation class MessagesServlet
 */
@WebServlet("/Messages")
public class MessagesServlet extends HttpServlet 
{
	private static final long serialVersionUID = 1L;
	private List<Message> messages = new ArrayList<Message>();
	
     
	@Override
	public void init()
	{
		System.out.println("Servlet initialized...");
		initializeMessages();
	}

    public MessagesServlet() 
    {
        super();
    }


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		Gson gson = new Gson();
		String msgs = gson.toJson(messages);
		
		Writer wr = response.getWriter();
		wr.write(msgs);
		wr.flush();
	}

	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException 
	{
		doGet(request, response);
	}

	
	private void initializeMessages()
	{
		Date date = new Date();
		
		for(int x = 1; x < 10; x++)
		{
			Message msg = new Message();
			msg.setId(x);
			msg.setTitle("Message Title " + x);
			msg.setDatePosted(date);
			msg.setMessageBody("The message is " + x);
			
			messages.add(msg);
		}
	}
}
