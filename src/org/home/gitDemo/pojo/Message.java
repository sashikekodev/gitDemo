package org.home.gitDemo.pojo;

import java.util.Date;


public class Message
{
	private int 	id;
	private String 	title;
	private String 	from;
	private Date	datePosted;
	private String 	messageBody;
	
	public Message()
	{
	}

	public int getId()
	{
		return id;
	}

	public void setId(int id)
	{
		this.id = id;
	}

	public String getTitle()
	{
		return title;
	}

	public void setTitle(String title)
	{
		this.title = title;
	}

	public String getFrom()
	{
		return from;
	}

	public void setFrom(String from)
	{
		this.from = from;
	}

	public Date getDatePosted()
	{
		return datePosted;
	}

	public void setDatePosted(Date datePosted)
	{
		this.datePosted = datePosted;
	}

	public String getMessageBody()
	{
		return messageBody;
	}

	public void setMessageBody(String messageBody)
	{
		this.messageBody = messageBody;
	}
	
	
}
